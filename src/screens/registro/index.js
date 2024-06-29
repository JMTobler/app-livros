import * as React from 'react';
import { View, StyleSheet, Text, Alert, ActivityIndicator } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';
import { adicionarUsuario, Usuarios } from '../../../users';
import Login from '../login';
import { SimpleLineIcons } from '@expo/vector-icons';
import Input from '../../components/InputLogin';
import Botao from '../../components/ButtonLogin';

export default function Registro({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [confirmarSenha, setConfimarSenha] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const registrar = () => {
        setLoading(true);

            if(senha !== confirmarSenha) {
                alert('As senhas não coincidem!');
                setLoading(false);
                return;
            }

            if(senha == '' || email == '') {
                alert('Preencha todos os campos!');
                setLoading(false);
                return;
            }

            const usuarioExiste = Usuarios.some(usuario => usuario.email === email);

            if(usuarioExiste) {
                alert('O e-mail ja esta em uso!');
                setLoading(false);
                return;
            }

            adicionarUsuario(email, senha);
            alert('Usuario registrado com sucesso!');
            navigation.navigate(Login);
            setLoading(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                <SimpleLineIcons name="book-open" size={40} color="#e3f4e4" />
                BookConnect
            </Text>
                
            <Text style={styles.title}>Registrar</Text>

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
                comMascara={false}
            />

            <Input 
                label="Confirmar Senha"
                placeholder="Confirmar Senha"
                value={confirmarSenha}
                onChangeText={setConfimarSenha}
                comMascara={false}
            />

            {loading ? (
                <ActivityIndicator style={styles.loadingIndicator} size="large" color="#e3f4e4" />
            ) : (
                <>
                    <Botao
                        value='Resgistrar'
                        callBack={registrar}
                    />

                    <Botao
                        value='Voltar' 
                        callBack={() => navigation.navigate('Login')}
                    />
                </>
            )}
        </View>
    )
}

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