import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  Button,
  Platform,
  Alert,
} from "react-native";
import SmsAndroid from "react-native-get-sms-android";

export default function DisplayMessages({ navigation }) {
  const [messages, setMessages] = useState([]);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    // Request SMS permission when the component mounts
    requestSmsPermission();
  }, []);

  // Ask user for permission to read SMS
  const requestSmsPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_SMS,
          {
            title: "SMS Permission",
            message:
              "This app needs permission to read your SMS messages to display them here.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("SMS permission granted");
          setPermissionGranted(true);
          fetchSmsMessages();
        } else {
          console.log("SMS permission denied");
          Alert.alert(
            "Permission Denied",
            "You need to allow SMS access to view messages."
          );
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      Alert.alert("Unsupported", "SMS reading only works on Android devices.");
    }
  };

  // Fetch messages using native Android SMS API
  const fetchSmsMessages = () => {
    SmsAndroid.list(
      JSON.stringify({
        box: "inbox", // inbox messages
        maxCount: 20, // limit to latest 20
      }),
      fail => {
        console.log("Failed to read SMS:", fail);
      },
      (count, smsList) => {
        const messages = JSON.parse(smsList);
        setMessages(messages);
      }
    );
  };
//android/app/src/main/AndroidManifest.xml
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {permissionGranted ? (
          messages.length > 0 ? (
            messages.map((msg, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.title}>From: {msg.address}</Text>
                <Text style={styles.body}>{msg.body}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noMessages}>No SMS messages found.</Text>
          )
        ) : (
          <Button title="Grant SMS Permission" onPress={requestSmsPermission} />
        )}
      </ScrollView>

      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Analysis")}>
          <Text style={styles.navButtonText}>Analysis</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#10b981",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#10b981",
  },
  body: {
    fontSize: 14,
    color: "#333",
    marginTop: 4,
  },
  noMessages: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    color: "#6b7280",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#e5e7eb",
  },
  navButtonText: {
    fontSize: 16,
    color: "#10b981",
    fontWeight: "bold",
  },
});
