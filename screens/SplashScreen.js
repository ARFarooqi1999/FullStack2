import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const SplashScreen = () => {
    return (
        <ImageBackground
            source={require('./assets/leave.png')} // Your image path
            style={styles.splashContainer}
        >
            <Text style={styles.text}>Birds Shop</Text>
        </ImageBackground>
    );
};

const MainApp = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.appText}>Welcome to the Main App!</Text>
        </View>
    );
};

export default function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Show splash screen for 3 seconds
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return isLoading ? <SplashScreen /> : <MainApp />;
}

const styles = StyleSheet.create({
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    appText: {
        fontSize: 24,
        color: '#333',
    },
    text: {
        fontFamily: 'IrishGrover-Regular', // Use the font file name
        fontSize: 24,
    },
});
