import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const SignupScreen = () => {
    return (
        <View style={styles.container}>
            {/* Top Section with Background Image */}
            <ImageBackground
                source={{ uri: './assets/leave.png' }} // Replace with your image URL
                style={styles.headerBackground}
                imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
            >
                <Text style={styles.headerText}>Birds Shop</Text>
                <Text style={styles.subHeaderText}>Looking For Pets</Text>
            </ImageBackground>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="User name or Email" placeholderTextColor="#999" />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#999" secureTextEntry />
                <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#999" secureTextEntry />
            </View>

            {/* Signup Button */}
            <TouchableOpacity style={styles.signupButton} onPress={() => alert('Signed Up!')}>
                <Text style={styles.signupText}>Signup</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    headerBackground: {
        width: '100%',
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f3d17', // Fallback color if image fails
    },
    headerText: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'IrishGrover_400Regular', // Optional: If Irish Grover font is used
    },
    subHeaderText: {
        color: 'white',
        fontSize: 18,
        marginTop: 5,
    },
    inputContainer: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    input: {
        height: 50,
        backgroundColor: '#E5E5E5',
        borderRadius: 25,
        paddingLeft: 20,
        marginBottom: 15,
        fontSize: 16,
        color: '#333',
    },
    signupButton: {
        backgroundColor: '#4a4a4a',
        borderRadius: 25,
        marginHorizontal: 80,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    signupText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SignupScreen;
