import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, ActivityIndicator, StyleSheet, ScrollView } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

// 스크린 사이즈 받아줌
const{ width:SCREEN_WIDTH } = Dimensions.get("window");
// console.log(SCREEN_WIDTH);

// 이거 보는 사람!! 내 키로 이상한짓 하지마라,,,
const API_KEY = "982f52b6731e6fb22fc43d91d6a86e95";

const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Atmosphere: "cloudy-gusts",
  Snow: "snow",
  Rain: "rains",
  Drizzle: "rain",
  Thunderstorm: "lightning",
};

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {coords: { latitude, longitude }} = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync({ latitude, longitude },{ useGoogleMaps: false });
    setCity(location[0].district);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`);
    const json = await response.json();
    setDays(json.daily);
  };
  useEffect(() => {
    getWeather();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      {/* pagingEnabled -> 페이지 하나씩 */}
      {/* showsHorizontalScrollIndicator -> 밑에 스크롤 페이지 어딘지 없애줌 */}
      <ScrollView
        pagingEnabled
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weather}>
        {days.length === 0 ? (
          <View style={{ ...styles.day, alignItems: "center" }}>
            <ActivityIndicator
              color="white"
              style={{ marginTop: 10 }}
              size="large"
            />
          </View>

        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.day}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.temp}>
                  {parseFloat(day.temp.day).toFixed(1)}
                </Text>
                <Fontisto
                  name={icons[day.weather[0].main]}
                  size={68}
                  color="white"
                />
              </View>
              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
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
    fontWeight:"500",
    color: "white",
  },
  weather:{
    // backgroundColor: "teal",
  },
  day:{
    width: SCREEN_WIDTH,
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  temp: {
    marginTop: 50,
    fontWeight: "600",
    fontSize: 100,
    color: "white",
  },
  description: {
    marginTop: -10,
    fontSize: 30,
    color: "white",
    fontWeight: "500",
  },
  tinyText: {
    marginTop: -5,
    fontSize: 25,
    color: "white",
    fontWeight: "500",
  },
});