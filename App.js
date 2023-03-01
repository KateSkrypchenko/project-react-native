import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
} from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/image-bg.jpg")}
        style={styles.image}
      >
        <RegistrationScreen></RegistrationScreen>
        {/* <Text style={styles.title}>Kate</Text>
        <TextInput style={styles.input}></TextInput> */}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    // alignItems: "center",
    justifyContent: "flex-end",
  },

  // title: {
  //   fontSize: 40,
  // },

  // input: {
  //   width: 100,
  //   height: 20,
  //   color: "black",
  //   borderWidth: 2,
  // },
});
