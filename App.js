import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import SignupScreen from "./screens/SignupScreen"; // Import Signup Screen
import LoginScreen from "./screens/LoginScreen";   // Import Login Screen

// Splash Screen Component
const SplashScreen = () => {
  return (
    <ImageBackground
      source={require("./assets/leave.png")} // Add your wallpaper image here
      style={styles.splashContainer}
    >
      <Text style={styles.splashText}>Birds Shop</Text>
      <Text style={styles.subText}>Looking For Pets</Text>
    </ImageBackground>
  );
};

// Main App Component
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show the splash screen for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Conditionally Render SplashScreen or Signup/Login Screen */}
      {isLoading ? <SplashScreen /> : <LoginScreen />}
    </SafeAreaView>
  );
}

// Styles
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f3d17", // Optional background color for fallback
  },
  splashText: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    fontFamily: "IrishGrover-Regular", // Use Irish Grover font here
  },
  subText: {
    fontSize: 20,
    color: "#ffffff",
    marginTop: 10,
    fontFamily: "IrishGrover-Regular",
  },
});
