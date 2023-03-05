/* eslint-disable no-unused-expressions */
import React from 'react';
import styled from 'styled-components';
import { useInfiniteQuery } from 'react-query';
import { Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { healthyService } from 'services';

const Wrapper = styled.div`
  margin-bottom: 56px;
  .exercises-wrapper {
    width: 100%;
    background: #414141;
    height: 264px;
    padding: 16px 8px 16px 24px;
    .exercises-header {
      display: flex;
      margin-bottom: 8px;
      .exercises-title {
        font-family: 'Inter' !important;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.15px;
        color: #ffffff;
        width: 96px;
      }
      .exercises-date {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 27px;
        letter-spacing: 0.11px;
        color: #ffffff;
      }
    }
    .exercises {
      max-height: 192px;
      overflow-y: auto;
      display: flex;
      flex-wrap: wrap;
      gap: 8px 40px;
      .exercise {
        width: 47%;
        display: flex;
        align-items: center;
        .dot {
          font-style: normal;
          font-weight: 300;
          font-size: 5px;
          line-height: 7px;
          letter-spacing: 0.015px;
          color: #ffffff;
          margin-right: 8px;
        }
        .info {
          flex-grow: 2;
          .name {
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 22px;
            letter-spacing: 0.075px;
            color: #ffffff;
          }
          .kcal {
            font-family: 'Inter' !important;
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 0.075px;
            color: #ffcc21;
          }
        }
        .min {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;
          text-align: right;
          letter-spacing: 0.09px;
          color: #ffcc21;
        }
      }
      .flex-center {
        width: 100%;
        justify-content: center;
      }
    }
  }
`;

const Exercises = () => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery(
    ['healthyService.fetchExercies'],
    async ({ pageParam }) => {
      const result = await healthyService.fetchExercies({
        page: pageParam || 1,
        size: 16,
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
    return [];
  }, [data]);

  return (
    <Wrapper>
      <div id="exercise-scroll" className="div-scroll" />
      <div id="exercise">
        <InfiniteScroll
          dataLength={items.length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          scrollThreshold={0.5}
          scrollableTarget="exercises"
        >
          <div className="exercises-wrapper">
            <div className="exercises-header">
              <div className="exercises-title">MY EXERCISE</div>
              <div className="exercises-date">2021.05.21</div>
            </div>
            <div className="exercises" id="exercises">
              {items.map((item, idx) => (
                <div className="exercise" key={idx}>
                  <div className="dot">●</div>
                  <div className="info">
                    <div className="name">家事全般（立位・軽い）</div>
                    <div className="kcal">{item.kcal}Kcal</div>
                  </div>
                  <div className="min">{item.time} min</div>
                </div>
              ))}
              {isFetching && (
                <div className="flex-center">
                  <Spin size="large" />
                </div>
              )}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </Wrapper>
  );
};

export default Exercises;
