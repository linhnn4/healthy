import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { healthyService } from 'services';
import { Spin, Progress } from 'antd';
import moment from 'moment';

const Wrapper = styled.div`
  .achievement {
    width: 540px;
    height: 312px;
    background-size: cover !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    position: relative;
    .achievement-info {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 312px;
    }
    .achievement-content {
      position: absolute;
      display: flex;
      gap: 4px;
      align-items: flex-end;
      .achievement-date {
        font-family: 'Inter' !important;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #ffffff;
        text-shadow: 0px 0px 6px #fc7400;
      }
      .achievement-percent {
        font-family: 'Inter' !important;
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 30px;
        text-align: center;
        color: #ffffff;
        text-shadow: 0px 0px 6px #fca500;
      }
    }
  }
`;

const Achievement = () => {
  const { data, isFetching } = useQuery(
    ['healthyService.fetchAchievement'],
    async () => {
      const result = await healthyService.fetchAchievement();
      return result;
    },
  );

  return (
    <Spin spinning={isFetching} size="large">
      <Wrapper>
        <div
          className="achievement"
          style={{ background: `url(${data?.image})` }}
        >
          <div className="achievement-info">
            <Progress
              type="circle"
              percent={data?.percent * 100}
              format={() => ''}
              width={184}
              strokeWidth={2}
              strokeColor="white"
              trailColor="transparent"
            />
            <div className="achievement-content">
              <div className="achievement-date">
                {moment(data?.createdDate).format('MM/DD')}
              </div>
              <div className="achievement-percent">{data?.percent * 100} %</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Spin>
  );
};

export default Achievement;
