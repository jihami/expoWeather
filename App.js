import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return ( 
    <View style={style.continer}>
      <Text style={style.text}>Hi</Text>
      <StatusBar style="light" />
    </View>
  );
}

// const styles ={ //여기에 쓰면 자동완서 잘 안된대
//   containter:{ 
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// };
const style = StyleSheet.create({ //여기에 쓰면 자동완성 잘 된대 - StyleSheet.create
  continer:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 28,
    color: "black"
  }
})