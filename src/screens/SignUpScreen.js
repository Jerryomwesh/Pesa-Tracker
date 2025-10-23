import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!username || !phone || !password) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    Alert.alert("Success", "Account created!");
    navigation.navigate("DisplayMessage");
  };

  return (
    <LinearGradient colors={['#00b894', '#10b981', '#059669']} style={styles.container}>
      <Text style={styles.title}>Register</Text>
      
      <View style={styles.form}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
        
        <View style={styles.loginSection}>
          <Text style={styles.loginQuestion}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.loginLink}>Login</Text>
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 40,
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
  registerButton: {
    backgroundColor: "#10b981",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginTop: 10,
  },
  registerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginSection: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginQuestion: {
    color: "#666",
    fontSize: 16,
  },
  loginLink: {
    color: "#10b981",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});