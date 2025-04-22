import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NewPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem vindo a Minha nova Página!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dbd7d7',
    },
    text: {
        fontSize: 20,
        color: 'black',
        textDecorationLine: 'underline',
    },
});