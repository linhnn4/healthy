/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styled from 'styled-components';
import { useInfiniteQuery } from 'react-query';
import { healthyService } from 'services';
import { Button, Empty, Spin } from 'antd';

const Wrapper = styled.div`
  min-height: 464px;
  max-width: 960px;
  margin: 0 auto 38px;
  .title {
    font-family: 'Inter' !important;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.11px;
    color: #414141;
  }
  .items {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 38px;
    .item {
      width: 231px;
      height: 231px;
      padding: 16px;
      border: 2px solid #707070;
      .date {
        width: 147px;
        font-family: 'Inter' !important;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.09px;
        color: #414141;
        margin-bottom: 8px;
      }
      .content {
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 17px;
        letter-spacing: 0.06px;
        color: #414141;
      }
    }
  }
`;

const Diaries = () => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery(
    ['healthyService.fetchDiaries'],
    async ({ pageParam }) => {
      const result = await healthyService.fetchDiaries({
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
            <div id="diary-scroll" className="div-scroll" />
            <div id="diary">
              <div className="title">MY DIARY</div>
              <div className="items">
                {items?.map((item, idx) => (
                  <div className="item" key={idx}>
                    <div className="date">2021.05.21 23:25</div>
                    <div className="content">
                      私の日記の記録が一部表示されます。
                      <br />
                      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                    </div>
                  </div>
                ))}
              </div>
              {hasNextPage ? (
                <div className="flex-center">
                  <Button type="primary hover-up" onClick={fetchNextPage}>
                    自分の日記をもっと見る
                  </Button>
                </div>
              ) : null}
            </div>
          </>
        )}
      </Wrapper>
    </Spin>
  );
};

export default Diaries;
