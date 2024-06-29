import * as React from 'react';
import { View, StyleSheet, Text, Alert, ActivityIndicator } from 'react-native';
import { Usuarios } from '../../../users';
import { SimpleLineIcons } from '@expo/vector-icons';
import Input from '../../components/InputLogin';
import Botao from '../../components/ButtonLogin';

export default function Login({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const logar = () => {
        setLoading(true);

        const usuario = Usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

        if(usuario) {
            navigation.navigate('Home', { usuario });
        } else {
            Alert.alert('Erro', 'Usuario ou senha inválidos');
        }
        setLoading(false);
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                <SimpleLineIcons name="book-open" size={40} color="#e3f4e4" />
                BookConnect
            </Text>

            <Input 
                label="E-mail"
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                comMascara={false}
            />

            <Input 
                label="Senha"
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                comMascara={true}
            />

            {loading ? (
                <ActivityIndicator style={styles.loadingIndicator} size="large" color="#e3f4e4" />
            ) : (
                <>
                    <Botao
                        value='Entrar'
                        callBack={logar}
                    />

                    <Botao
                        value='Registrar-se' 
                        callBack={() => navigation.navigate('Registro')}
                    />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#436453ff',
    },
    title: {
        marginBottom: 16,
        textAlign: 'center',
        fontSize: 44,
        fontWeight: '700',
        color: '#e3f4e4'
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 16,
        marginBottom: 16,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    loadingIndicator: {
        marginTop: 16,
    }
});
