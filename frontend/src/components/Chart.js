// import React from 'react';
// import { useTheme } from '@material-ui/core/styles';
// import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// // Generate Sales Data
// function createData(time, amount) {
//   return { time, amount };
// }

// const data = [
//   createData('00:00', 0),
//   createData('03:00', 300),
//   createData('06:00', 600),
//   createData('09:00', 800),
//   createData('12:00', 1500),
//   createData('15:00', 2000),
//   createData('18:00', 2400),
//   createData('21:00', 2400),
//   createData('24:00', undefined),
// ];

// export default function Chart() {
//   const theme = useTheme();

//   return (
//     <React.Fragment>
//       <Title>Today</Title>
//       <ResponsiveContainer>
//         <LineChart
//           data={data}
//           margin={{
//             top: 16,
//             right: 16,
//             bottom: 0,
//             left: 24,
//           }}
//         >
//           <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
//           <YAxis stroke={theme.palette.text.secondary}>
//             <Label
//               angle={270}
//               position="left"
//               style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
//             >
//               Sales ($)
//             </Label>
//           </YAxis>
//           <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
//         </LineChart>
//       </ResponsiveContainer>
//     </React.Fragment>
//   );
// }
import React from 'react';
import Plot from 'react-plotly.js';

class Chart extends React.Component {
  render() {
    return (<div>
      <Title>Emergency cases monthly trend</Title>
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
               y: [5, 74, 57, 34, 82, 89, 65, 112, 41, 87, 72, 98, 100, 79],
               marker: {color: 'orange'},
               fill: 'tonexty',
               type: 'scatter',
               name: 'Emergency Cases'
          },
        ]}
        layout={ 
          {
            width: 675,
            height: 420,
            title: 'Emergency Cases'
        } }
      />
      </div>
    );
  }
}

export default Chart;