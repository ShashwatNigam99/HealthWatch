
import Title from './Title';
import React from 'react';
import Plot from 'react-plotly.js';
var trace1 = {
  x: ['2020-05-01 00:00:00',
      '2020-05-02 00:00:00',
      '2020-05-03 00:00:00',
      '2020-05-04 00:00:00',
      '2020-05-05 00:00:00',
      '2020-05-06 00:00:00',
      '2020-05-07 00:00:00'
],
y: [1089, 1432, 2312, 1578, 1457, 1036, 1127],
name: 'Addressed Cases',
type: 'bar'
};

var trace2 = {
  x: ['2020-05-01 00:00:00',
      '2020-05-02 00:00:00',
      '2020-05-03 00:00:00',
      '2020-05-04 00:00:00',
      '2020-05-05 00:00:00',
      '2020-05-06 00:00:00',
      '2020-05-07 00:00:00'
],
y: [109, 112, 231, 178, 247, 136, 267],
name: 'Unaddressed Cases',
type: 'bar'
};

class Response extends React.Component {
  render() {
    return (<div>
      <Title>Response analytics</Title>
      <Plot
        data={[
          trace1, trace2
        ]}
        layout={ 
          {
            barmode: 'stack',
            width: 675,
            height: 420,
            title: 'Addressed vs Unaddressed Cases'
        } }
      />
      </div>
    );
  }
}

export default Response;