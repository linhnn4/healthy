import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { healthyService } from 'services';
import { Spin } from 'antd';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import moment from 'moment';

const Wrapper = styled.div`
  width: 740px;
  height: 312px;
  background: #2e2e2e;
`;

const BodyGraph = () => {
  const { data, isFetching } = useQuery(
    ['healthyService.fetchBodyGraph'],
    async () => {
      const result = await healthyService.fetchBodyGraph();
      return result;
    },
  );

  const items = React.useMemo(() => {
    if (!Array.isArray(data) || data?.length <= 0) return [];
    return data;
  }, [data]);

  console.log({ items });

  const options = React.useMemo(
    () => ({
      chart: {
        height: 300,
        backgroundColor: '#2e2e2e',
      },
      title: {
        text: '',
      },
      xAxis: {
        type: 'datetime',
        labels: {
          style: {
            color: 'white',
          },
        },
      },
      yAxis: {
        title: {
          text: null,
        },
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          name: 'Weight',
          color: '#FFCC21',
          data: items.map(d => ({
            x: moment(d.date)
              .startOf('day')
              .valueOf(),
            y: d.weight,
          })),
        },
        {
          name: 'Fat',
          color: '#8FE9D0',
          data: items.map(d => ({
            x: moment(d.date)
              .startOf('day')
              .valueOf(),
            y: d.fat,
          })),
        },
      ],
    }),
    [items],
  );

  return (
    <Spin spinning={isFetching} size="large">
      <Wrapper>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </Wrapper>
    </Spin>
  );
};

export default BodyGraph;
