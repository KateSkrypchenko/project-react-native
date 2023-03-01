export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/image-bg.jpg")}
        style={styles.image}
      >
        <Text style={styles.title}>Kate</Text>
        <TextInput style={styles.input}></TextInput>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}
