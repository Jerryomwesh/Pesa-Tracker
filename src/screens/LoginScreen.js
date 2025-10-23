import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    Alert.alert("Success", "Welcome back!");
    navigation.navigate("MainApp");
  };

  return (
    <LinearGradient
      colors={["#00b894", "#10b981", "#059669"]}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Login Here</Text>
        <Text style={styles.subtitle}>Welcome back! We've missed you</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          placeholder="Username or Phone"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.registerSection}>
          <Text style={styles.registerQuestion}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#e8f5e8",
    textAlign: "center",
    fontStyle: "italic",
  },
  form: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
  },
  input: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#10b981",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },
  loginText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  registerSection: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  registerQuestion: {
    color: "#666",
    fontSize: 16,
  },
  registerLink: {
    color: "#10b981",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
