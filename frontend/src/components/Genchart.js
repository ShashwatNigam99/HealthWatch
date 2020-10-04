
import Title from './Title';
import React from 'react';
import Plot from 'react-plotly.js';

class Genchart extends React.Component {
  render() {
    return (<div>
      <Title>General cases monthly trend</Title>
      <Plot
        data={[
          {
            x: [
              '2020-05-01 00:00:00',
              '2020-05-03 00:00:00',
              '2020-05-05 00:00:00',
              '2020-05-07 00:00:00',
              '2020-05-09 00:00:00',
              '2020-05-11 00:00:00',
              '2020-05-13 00:00:00',
              '2020-05-15 00:00:00',
              '2020-05-17 00:00:00',
              '2020-05-19 00:00:00',
              '2020-05-21 00:00:00',
              '2020-05-23 00:00:00',
              '2020-05-25 00:00:00',
              '2020-05-27 00:00:00'
            ],
  
            y: [1053, 2789, 3105, 4562, 2721, 3110, 4214, 3870, 2650, 3179, 2541, 2110, 4169, 4545],
            
            fill: 'tonexty',
            type: 'scatter',
            name: 'General Cases'
          },
        ]}
        layout={ 
          {
            width: 675,
            height: 420,
            title: 'General Cases'
        } }
      />
      </div>
    );
  }
}

export default Genchart;