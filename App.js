import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet} from 'react-native';

export default function App() {
  return  (
  <View style={styles.container}>
    <StatusBar style='light'/>
      <View style={styles.city}>
        <Text style={styles.cityName}>서울</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desciption}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desciption}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desciption}>Sunny</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.desciption}>Sunny</Text>
        </View>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"tomato"
  },
  city:{
    flex: 1.2,
    justifyContent:"center",
    alignItems:"center",
  },
  cityName:{
    fontSize:68,
    fontWeight:"500"
  },
  weather:{
    flex:3,
    // backgroundColor: "teal",
  },
  day:{
    flex:1,
    alignItems:"center",
  },
  temp:{
    marginTop:50,
    fontSize:178,
  },
  desciption:{
    marginTop:-30,
    fontSize:60,
  },
});