/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';
import { useInfiniteQuery } from 'react-query';
import { healthyService } from 'services';
import { Button, Empty, Spin } from 'antd';
import moment from 'moment';

const Wrapper = styled.div`
  min-height: 464px;
  .items {
    display: flex;
    gap: 18px 8px;
    flex-wrap: wrap;
    margin-bottom: 38px;
    .item {
      width: 234px;
      .image {
        position: relative;
        margin-bottom: 16px;
        width: 100%;
        height: 144px;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        img {
          max-width: 100%;
          max-height: 100%;
        }
        .date {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 144px;
          height: 24px;
          font-family: 'Inter' !important;
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 30px;
          color: #ffffff;
          background: #ffcc21;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .des {
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: 0.075px;
        color: #414141;
      }
      .tags {
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 22px;
        letter-spacing: 0.06px;
        color: #ff963c;
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }
`;

const RecommendedItems = ({ selectedType }) => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery(
    ['healthyService.fetchColumn', { type: selectedType }],
    async ({ queryKey, pageParam }) => {
      const result = await healthyService.fetchColumn({
        ...queryKey[1],
        page: pageParam || 1,
        size: 8,
      });
      return { items: result, hasNext: true, total: 1000 };
    },
    {
      getNextPageParam: ({ currentPage, hasNext }) =>
        hasNext ? currentPage + 1 : undefined,
    },
  );

  const items = React.useMemo(() => {
    const array = [];
    if (data?.pages) {
      data?.pages?.forEach(page => {
        page?.items.forEach(item => {
          array.push(item);
        });
      });
      return array || [];
    }
    return null;
  }, [data]);

  return (
    <Spin spinning={isFetching} size="large">
      <Wrapper>
        {!isFetching && items?.length === 0 ? (
          <Empty />
        ) : (
          <>
            <div className="items">
              {items?.map((item, idx) => (
                <div className="item" key={idx}>
                  <div
                    className="image"
                    style={{ background: `url(${item?.image})` }}
                  >
                    <div className="date">
                      {moment(item?.createdDate).format('YYYY.MM.DD HH.mm')}
                    </div>
                  </div>
                  <div className="des">{item?.description}</div>
                  <div className="tags">
                    {(item?.tags || []).map((tag, index) => (
                      <div className="tag" key={index}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {hasNextPage ? (
              <div className="flex-center">
                <Button type="primary hover-up" onClick={fetchNextPage}>
                  コラムをもっと見る
                </Button>
              </div>
            ) : null}
          </>
        )}
      </Wrapper>
    </Spin>
  );
};

export default RecommendedItems;
