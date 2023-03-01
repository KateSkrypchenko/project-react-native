import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.wrapper}
    >
      <View style={{ ...styles.form, paddingBottom: isShowKeyboard ? 0 : 45 }}>
        <View style={styles.image}>
          <TouchableOpacity style={styles.btnAddImage}>
            <Text style={styles.textAddImage}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Регистрация</Text>
        <TextInput
          style={styles.input}
          placeholder="Логин"
          onFocus={() => setIsShowKeyboard(true)}
        />
        <TextInput
          style={styles.input}
          placeholder="Адрес электронной почты"
          onFocus={() => setIsShowKeyboard(true)}
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry={true}
          onFocus={() => setIsShowKeyboard(true)}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={keyboardHide}
        >
          <Text style={styles.text}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <Text>Уже есть аккаунт? Войти</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 500,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  form: {
    height: "100%",
    width: "100%",
    position: "relative",
    paddingTop: 92,
    paddingHorizontal: 16,
    alignItems: "center",
  },

  image: {
    position: "absolute",
    width: 132,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -50,
  },

  btnAddImage: {
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FF6C00",
    color: "#FF6C00",
    alignItems: "center",
  },

  textAddImage: {
    fontSize: 15,
    color: "#FF6C00",
  },

  title: {
    marginBottom: 32,
    fontSize: 30,
    fontWeight: 500,
    color: "#212121",
  },

  input: {
    width: "100%",
    height: 50,
    marginBottom: 16,
    padding: 16,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },

  button: {
    width: "100%",
    paddingVertical: 16,
    marginTop: 20,
    marginBottom: 16,
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },

  text: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});
