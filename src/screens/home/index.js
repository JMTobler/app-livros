import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput } from 'react-native';

const livros = [
    { id: '1', titulo: 'Livro 1', autor: 'Autor 1', capa: 'https://via.placeholder.com/150' },
    { id: '2', titulo: 'Livro 2', autor: 'Autor 2', capa: 'https://via.placeholder.com/150' },
    { id: '3', titulo: 'Livro 3', autor: 'Autor 3', capa: 'https://via.placeholder.com/150' },
];

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const livrosFiltrados = livros.filter(Livro =>
        Livro.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        livro.autor.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderItem = ({ item }) => (
        <View style={styles.item}>
        <Image source={{ uri: item.capa }} style={styles.cover} />
        <View style={styles.textContainer}>
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.author}>{item.autor}</Text>
        </View>
        </View>
    );

    return (
        <View style={styles.container}>
        <TextInput
            style={styles.searchBar}
            placeholder="Pesquisar livros..."
            value={searchQuery}
            onChangeText={setSearchQuery}
        />
        <FlatList
            data={livrosFiltrados}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.list}
        />
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#436453ff',
        padding: 10,
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#e3f4e4',
    },
    list: {
        paddingBottom: 20,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#ffdab4',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    cover: {
        width: 50,
        height: 75,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    author: {
        fontSize: 16,
        color: '#666',
    },
});

export default Home;