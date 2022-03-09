import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return ( 
    <View style={{ flexDirection:"row"}}>
      <View style={{width:100, height:100, backgroundColor:"tomato"}}></View>
      <View style={{width:100, height:100, backgroundColor:"teal"}}></View>
      <View style={{width:100, height:100, backgroundColor:"orange"}}></View>
    </View>
  );
}