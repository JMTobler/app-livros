import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Botao = (props) => {
    return (    
        <TouchableOpacity
            style={ styles.button }
            onPress={ props.callBack }
            value={props.value}
        >
            <Text style={ styles.text }>{ props.value }</Text>
        </TouchableOpacity>
    )
}   

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#ffdab4',
        padding: 12,
        width: 320,
        borderRadius: 25,
        marginTop: 5
    },
    text: {
        fontSize: 18,
        color: '#436453ff',
        fontWeight: 700
    }
})

export default Botao