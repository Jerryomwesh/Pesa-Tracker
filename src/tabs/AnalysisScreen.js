import React, { useEffect, useState } from "react";
import { View,Text,ScrollView,TouchableOpacity,Dimensions,ActivityIndicator,StyleSheet,} 
from "react-native";
import { PieChart } from "react-native-chart-kit";
import api from "../utils/axiosConfig";

const screenWidth = Dimensions.get("window").width;

export default function AnalysisScreen({navigation}) {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  async function fetchTransactions() {
    try {
      const res = await api.get("/transactions"); 
      const data = res.data;

      
      const categories = {};
      data.forEach((t) => {
        categories[t.category] = (categories[t.category] || 0) + t.amount;
      });

      const pieData = Object.keys(categories).map((cat, i) => ({
        name: cat,
        amount: categories[cat],
        color: ["#10b981", "#60a5fa", "#f59e0b", "#f87171", "#a78bfa"][i % 5],
        legendFontColor: "#333",
        legendFontSize: 14,
      }));

      setTransactions(data);
      setChartData(pieData);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Spending Analysis</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#10b981" style={{ marginTop: 40 }} />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.card}>
            <Text style={styles.subHeader}>Spending Breakdown</Text>

            <PieChart
              data={chartData}
              width={screenWidth - 32}
              height={220}
              accessor="amount"
              backgroundColor="transparent"
              paddingLeft="15"
              chartConfig={{
                color: () => `#10b981`,
              }}
              absolute
            />
          </View>
        </ScrollView>
      )}
      <View style={styles.bottomNav}>
  <TouchableOpacity
    style={styles.navButton}
    onPress={() => navigation.navigate("Profile")}
  >
    <Text style={styles.navButtonText}>Profile</Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.navButton}
    onPress={() => navigation.navigate("DisplayMessage")}
  >
    <Text style={styles.navButtonText}>DisplayMessage</Text>
  </TouchableOpacity>
</View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    alignItems: "center",
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#10b981",
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "600",
    color: "#10b981",
    marginBottom: 10,
    textAlign: "center",
  },
  card: {
    width: screenWidth - 40,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#10b981",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },
  bottomNav: {
  position: "absolute",      
  bottom: 0,
  left: 0,
  right: 0,
  flexDirection: "row",      
  justifyContent: "space-around", 
  alignItems: "center",
  backgroundColor: "#fff",   
  paddingVertical: 14,
  borderTopWidth: 1,
  borderTopColor: "#e5e5e5",
  elevation: 8,            
  shadowColor: "#000",
  shadowOffset: { width: 0, height: -2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
},
navButton: {
  backgroundColor: "#10b981",
  paddingVertical: 10,
  paddingHorizontal: 24,
  borderRadius: 25,
},
navButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
},

});
