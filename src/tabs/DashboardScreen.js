import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function DashboardScreen({ navigation }) {
  return (
    <LinearGradient colors={['#00b894', '#10b981', '#059669']} style={styles.container}>
      <ScrollView style={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, Jerry!</Text>
          <Text style={styles.subtitle}>Welcome back to Pesa-Tracker</Text>
        </View>

        {/* Quick Stats Cards */}
        <View style={styles.statsSection}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>KSh 12,450</Text>
            <Text style={styles.statLabel}>This Month</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>Transactions</Text>
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          <View style={styles.transactionCard}>
            <Text style={styles.transactionText}>Safaricom - KSh 500</Text>
            <Text style={styles.transactionDate}>Today, 2:30 PM</Text>
          </View>
          <View style={styles.transactionCard}>
            <Text style={styles.transactionText}>Equity Bank - KSh 1,200</Text>
            <Text style={styles.transactionDate}>Yesterday, 10:15 AM</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate("Transactions")}
          >
            <Text style={styles.actionText}>View All Transactions</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate("Analytics")}
          >
            <Text style={styles.actionText}>Analyze Spending</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 30,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#e8f5e8",
  },
  statsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  statCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#10b981",
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
  },
  transactionCard: {
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  transactionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 3,
  },
  transactionDate: {
    fontSize: 14,
    color: "#666",
  },
  actionsSection: {
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    alignItems: "center",
  },
  actionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#10b981",
  },
});