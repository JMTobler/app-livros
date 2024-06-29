import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
    const user = {
        name: 'Usuario Teste',
        email: 'teste@teste.com',
        avatar: 'https://via.placeholder.com/150',
        bio: 'Bio Teste'
    };

    return (
        <View style={styles.container}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.bio}>{user.bio}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#436453ff',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffdab4'
    },
    email: {
        fontSize: 18,
        color: '#e3f4e4',
        marginBottom: 10,
    },
    bio: {
        fontSize: 16,
        color: '#e3f4e4',
        textAlign: 'center',
        marginHorizontal: 20,
    },
});

export default ProfileScreen;
