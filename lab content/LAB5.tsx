import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet
} from "react-native";

import menuData from "./data.json";

// 📦 Type Definition
type MenuItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
};

export default function App() {

  // 🎨 Category Color Function
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Veg":
        return "#d4f8d4";     // Light Green
      case "Non-Veg":
        return "#ffd6d6";     // Light Red
      case "Beverage":
        return "#d6eaff";     // Light Blue
      default:
        return "#ffffff";
    }
  };

  // 🧾 Render Each Food Card
  const renderItem = ({ item }: { item: MenuItem }) => (
    <View
      style={[
        styles.card,
        { backgroundColor: getCategoryColor(item.category) }
      ]}
    >
      <Text style={styles.foodName}>🍽 {item.name}</Text>

      <Text style={styles.text}>
        📂 Category: {item.category}
      </Text>

      <Text style={styles.text}>
        💰 Price: ₹{item.price}
      </Text>

      <Text style={styles.text}>
        ⭐ Rating: {item.rating}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      {/* 🔝 Header */}
      <Text style={styles.header}>🍴 Restaurant Menu</Text>

      {/* 📋 Menu List */}
      <FlatList
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}

        horizontal
        showsHorizontalScrollIndicator={false}

        // Center cards vertically
        contentContainerStyle={{
          alignItems: "center"
        }}

        // Separator
        ItemSeparatorComponent={() => (
          <View style={{ width: 12 }} />
        )}

        // Footer
        ListFooterComponent={
          <Text style={styles.footer}>
            🙏 Thank You for Visiting
          </Text>
        }

        // Empty List
        ListEmptyComponent={
          <Text style={styles.empty}>
            No Menu Items Available
          </Text>
        }
      />

    </SafeAreaView>
  );
}

// 🎨 Styles
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 10
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    alignSelf: "center"
  },

  // 🍽 Card
  card: {
    width: 220,
    height: 130,          // Reduced height
    padding: 10,
    borderRadius: 15,

    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },

    justifyContent: "flex-start"
  },

  foodName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6
  },

  text: {
    fontSize: 13,
    marginBottom: 2
  },

  footer: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginLeft: 20
  },

  empty: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50
  }

});
