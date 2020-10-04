
import React from 'react';
import Plot from 'react-plotly.js';

class GenPiechart extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            values: [267, 1127],

            labels: ['Unaddressed', 'Addressed', 'Adult-Men', 'Elderly'],
    
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