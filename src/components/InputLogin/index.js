import React from "react";
import { SafeAreaView, TextInput, StyleSheet, Text } from "react-native";

const Input = (props) => {
    return (
        <SafeAreaView>
            <Text style={styles.Text}>{props.label}</Text>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                secureTextEntry={props.comMascara}
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginBottom: 15,
        marginTop: 3,
        padding: 10,
        width: 320,
        borderRadius: 20,
        color: '#436453ff',
        fontSize: 18,
        backgroundColor: '#e4f5e5'
    },
    Text: {
        fontWeight: '700',
        color: '#ffdab4'
    }
});

export default Input;