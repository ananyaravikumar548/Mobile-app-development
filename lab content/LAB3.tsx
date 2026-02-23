import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";


// 🏦 Payment Data
const transferBank = [
  {
    id: "1",
    name: "Bank Magada",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Mandiri_logo.svg",
  },
  {
    id: "2",
    name: "Bank BCA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/BCA_logo.svg",
  },
  {
    id: "3",
    name: "Bank BNI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/BNI_logo.svg",
  },
  {
    id: "4",
    name: "Bank Mega",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bank_Mega_logo.svg",
  },
];

const virtualAccount = [
  { id: "5", name: "Virtual Account Magada" },
  { id: "6", name: "Virtual Account BCA" },
  { id: "7", name: "Virtual Account BNI" },
  { id: "8", name: "Virtual Account Mega" },
];

const installment = [
  { id: "9", name: "Kredivo" },
  { id: "10", name: "< 17 Tahun (S&K Berlaku)" },
];


// 🧩 Row Component
const PaymentItem = ({ item }: any) => {
  return (
    <TouchableOpacity style={styles.row}>
      
      {/* Logo / Icon */}
      <View style={styles.logoBox}>
        <Text style={styles.logoText}>🏦</Text>
      </View>

      {/* Name */}
      <Text style={styles.rowText}>{item.name}</Text>

      {/* Arrow */}
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );
};



// 📱 Main Screen
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.back}>←</Text>
        <Text style={styles.headerTitle}>Pembayaran</Text>
      </View>


      {/* White Card */}
      <View style={styles.card}>

        {/* Timer */}
        <Text style={styles.timer}>
          Selesaikan pemesanan dalam{" "}
          <Text style={{ color: "red" }}>00:60:00</Text>
        </Text>


        {/* Transfer Bank */}
        <Text style={styles.sectionTitle}>Transfer Bank</Text>
        <FlatList
          data={transferBank}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PaymentItem item={item} />
          )}
        />


        {/* Virtual Account */}
        <Text style={styles.sectionTitle}>Virtual Account</Text>
        <FlatList
          data={virtualAccount}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PaymentItem item={item} />
          )}
        />


        {/* Installment */}
        <Text style={styles.sectionTitle}>
          Cicilan Tanpa Kartu Kredit
        </Text>
        <FlatList
          data={installment}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PaymentItem item={item} />
          )}
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    backgroundColor: "#7B2CBF",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  back: {
    fontSize: 20,
    color: "white",
    marginRight: 12,
  },

  headerTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },

  card: {
    backgroundColor: "white",
    marginTop: -20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
    flex: 1,
  },

  timer: {
    textAlign: "center",
    marginBottom: 16,
    color: "#666",
  },

  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 16,
    marginBottom: 8,
    color: "#333",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: "#EEE",
  },

  logoBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#F3E8FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  logoText: {
    fontSize: 16,
  },

  rowText: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },

  arrow: {
    fontSize: 20,
    color: "#7B2CBF",
  },
});



[
  { "id": 1, "name": "Rahul", "grade": "A", "section": "1" },
  { "id": 2, "name": "Priya", "grade": "B", "section": "2" },
  { "id": 3, "name": "Arjun", "grade": "A+", "section": "1" }
]
