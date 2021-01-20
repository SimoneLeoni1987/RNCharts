// import React from 'react';
// import {View, Dimensions, Text} from 'react-native';

// // import {LineChart} from 'react-native-chart-kit';
// import * as shape from 'd3-shape';
// import {LineChart, Path, Grid, XAxis} from 'react-native-svg-charts';

// const Chart = (props) => {
//   // const {labels, data} = props;

//   // const d = [1, 2, 3, 4, 5];
//   // const d = data.length == 0 ? [1] : data;

//   const data1 = [50, 10, 40];
//   const data2 = [87, 66, 69];

//   //Array of datasets, following this syntax:
//   // const data = [
//   //   {
//   //     data: data1,
//   //     svg: {stroke: 'purple'},
//   //   },
//   //   {
//   //     data: data2,
//   //     svg: {stroke: 'green'},
//   //   },
//   // ];
//   const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

//   return (
//     <View style={{height: 200, padding: 20}}>
//       <LineChart
//         style={{height: 200}}
//         data={data}
//         contentInset={{top: 20, bottom: 20}}>
//         <Grid />
//       </LineChart>

//       {/* <View
//         style={{
//           flexDirection: 'row',
//           flex: 1,
//           justifyContent: 'space-between',
//         }}>
//         <Text>Lun</Text>
//         <Text>Mar</Text>
//         <Text>Mer</Text>
//         <Text>Gio</Text>
//         <Text>Ven</Text>
//         <Text>Sab</Text>
//         <Text>Dom</Text>
//       </View> */}

//       {/* <LineChart
//         data={{
//           labels: labels,
//           datasets: [
//             {
//               data: d,
//             },
//           ],
//         }}
//         width={Dimensions.get('window').width} // from react-native
//         height={220}
//         yAxisInterval={1} // optional, defaults to 1
//         chartConfig={{
//           backgroundColor: '#e26a00',
//           backgroundGradientFrom: '#fb8c00',
//           backgroundGradientTo: '#ffa726',
//           decimalPlaces: 2, // optional, defaults to 2dp
//           color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//           propsForDots: {
//             r: '6',
//             strokeWidth: '2',
//             stroke: '#ffa726',
//           },
//         }}
//         bezier
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//       /> */}
//     </View>
//   );
// };

// export default Chart;

import React from 'react';
import {LineChart, Grid} from 'react-native-svg-charts';
import {View} from 'react-native';
import Label from './Label';
import XAxis from './XAxis';

class XAxisExample extends React.PureComponent {
  render() {
    const data = [50, 0, 10, 40, 95];

    const labels = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'];

    return (
      <View style={{height: 200, padding: 20}}>
        <LineChart
          style={{flex: 1}}
          width={100}
          data={data}
          gridMin={0}
          contentInset={{top: 10, bottom: 10}}
          svg={{stroke: 'rgb(134, 65, 244)'}}>
          <Grid />
        </LineChart>

        <XAxis
          height={30}
          width={400}
          data={labels}
          onClick={(index) => console.log(index)}
        />
      </View>
    );
  }
}
export default XAxisExample;
