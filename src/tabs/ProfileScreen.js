import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Alert } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";

export default function ProfileScreen({ navigation }) {
  const [photo, setPhoto] = useState(null);
  const insets = useSafeAreaInsets();

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert("Permission required to access gallery");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", onPress: () => navigation.navigate("Home") }
      ]
    );
  };

  const showSettings = () => {
    Alert.alert("Settings", "Language: English\nCurrency: KSh\nTheme: Auto");
  };

  const showSupport = () => {
    Alert.alert("Support", "Email: help@pesa-tracker.com\nPhone: +254 700 123 456");
  };

  return (
    <LinearGradient colors={['#00b894', '#10b981', '#059669']} style={styles.container}>
      <ScrollView 
        style={styles.content}
        contentContainerStyle={{ paddingBottom: insets.bottom + 150 }}
      >
        <Text style={styles.header}>Profile</Text>

        {/* Profile Photo */}
        <View style={styles.photoSection}>
          <TouchableOpacity onPress={pickImage}>
            <Image
              source={photo ? { uri: photo } : require("../../assets/images/profile.png")}
              style={styles.profilePhoto}
            />
          </TouchableOpacity>
          <Text style={styles.photoHint}>Tap to change photo</Text>
        </View>

        {/* User Info */}
        <View style={styles.section}>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>Jerry Mwangi</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>+254 712 345 678</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>jerry@example.com</Text>
          </View>
        </View>

        {/* Menu */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.menuItem} onPress={showSettings}>
            <Text style={styles.menuText}>⚙️ Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={showSupport}>
            <Text style={styles.menuText}>📞 Support</Text>
          </TouchableOpacity>
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
  photoSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
  },
  photoHint: {
    color: "#e8f5e8",
    marginTop: 8,
    fontSize: 14,
  },
  section: {
    marginBottom: 25,
  },
  infoCard: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 10,
    padding: 15,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
    color: "#666",
  },
  value: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
  },
  menuItem: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 10,
    padding: 15,
    marginBottom: 8,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  logoutButton: {
    backgroundColor: "#10b981",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginBottom: 30,
  },
  logoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});