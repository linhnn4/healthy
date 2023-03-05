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
  max-width: 960px;
  margin: 0 auto 38px;
  .items {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 38px;
    .item {
      width: 234px;
      height: 241px;
      .image {
        position: relative;
        width: 100%;
        height: 241px;
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
    }
  }
`;

const Meals = ({ selectedType }) => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery(
    ['healthyService.fetchMeals', { type: selectedType }],
    async ({ queryKey, pageParam }) => {
      const result = await healthyService.fetchMeals({
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
                      {moment(item?.createdDate).format('MM.DD')}{' '}
                      {selectedType || item?.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {hasNextPage ? (
              <div className="flex-center">
                <Button type="primary hover-up" onClick={fetchNextPage}>
                  記録をもっと見る
                </Button>
              </div>
            ) : null}
          </>
        )}
      </Wrapper>
    </Spin>
  );
};

export default Meals;
