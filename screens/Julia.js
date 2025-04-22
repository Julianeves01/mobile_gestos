import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Julia() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("")}>
            <Text style={styles.text}>Bem vindo a Minha Página Home!</Text>
        </TouchableOpacity>
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