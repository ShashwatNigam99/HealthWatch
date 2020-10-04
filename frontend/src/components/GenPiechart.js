
import React from 'react';
import Plot from 'react-plotly.js';

class GenPiechart extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            values: [720, 1247, 1028, 1550],

            labels: ['Children', 'Adult-Women', 'Adult-Men', 'Elderly'],
    
            type: 'pie'
          },
        ]}
        layout={ 
          {
            height: 375,

            width: 475,
    
            title: "Age Based Analysis"
        } }
      />
    );
  }
}

export default GenPiechart;