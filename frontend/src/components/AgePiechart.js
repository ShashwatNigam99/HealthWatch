
import React from 'react';
import Plot from 'react-plotly.js';

class AgePiechart extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            values: [12, 20, 22, 25],

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

export default AgePiechart;