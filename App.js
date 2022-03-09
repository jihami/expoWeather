import { StatusBar } from 'expo-status-bar';
import { View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';

// 스크린 사이즈 받아줌
const{ width:SCREEN_WIDTH } = Dimensions.get("window");
// console.log(SCREEN_WIDTH);

export default function App() {
  return  (
  <View style={styles.container}>
    <StatusBar style='light'/>
      <View style={styles.city}>
        <Text style={styles.cityName}>서울</Text>
      </View>
      {/* pagingEnabled -> 페이지 하나씩 */}
      {/* showsHorizontalScrollIndicator -> 밑에 스크롤 페이지 어딘지 없애줌 */}
      <ScrollView
        pagingEnabled
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}>
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
      </ScrollView>
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
    // backgroundColor: "teal",
  },
  day:{
    width: SCREEN_WIDTH,
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