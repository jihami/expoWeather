import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return ( 
    // <View style={{flex:1}}> // 세로
    //   <View style={{flex:1,backgroundColor:"tomato"}}></View>
    //   <View style={{flex:6,backgroundColor:"teal"}}></View>
    //   <View style={{flex:1,backgroundColor:"orange"}}></View>
    // </View>
    <View style={{flex:1, flexDirection:"row"}}> //가로
    <View style={{flex:1,backgroundColor:"tomato"}}></View>
    <View style={{flex:6,backgroundColor:"teal"}}></View>
    <View style={{flex:1,backgroundColor:"orange"}}></View>
  </View>
  );
}