import React, { useState } from 'react';
import { View, Text, Alert, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import * as FileSystem from 'expo-file-system'


export default function LoginScreen({ navigation }) {

    const [usuario, setuser] = useState('')
    const [pass, setpass] = useState('')

    const inicioSecion = async () => {
        try {
            const file = `${FileSystem.documentDirectory}usuarios.json`;
            const fileContents = await FileSystem.readAsStringAsync(file);
            const usuariosLis = JSON.parse(fileContents);
            const user = usuariosLis.find(user => user.username === usuario && user.password === pass);

            if (user) {
                navigation.navigate('HOMETAB');
            } else {
                Alert.alert('Error', 'Credenciales incorrectas');
            }
        } catch (error) {
            console.error('Error al leer el archivo de usuarios:', error);
        }
    }
    console.log(usuario.pass)

    return (
        <ImageBackground style={styles.container}
            source={require("../assets/images/fondo.jpg")}
        >
            <Image source={require('../assets/images/usuario.png')}
                style={styles.img}
            />
            <View style={styles.inputContainer}>
                <Text style={styles.txt}>Usuario</Text>
                <TextInput
                    placeholder='Ingrese Usuario'
                    style={styles.txtInput}
                    onChangeText={(texto) => setuser(texto)}


                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.txt}>Password</Text>
                <TextInput
                    placeholder='Ingrese Password'
                    style={styles.txtInput} secureTextEntry
                    onChangeText={(texto) => setpass(texto)}

                />
            </View>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}
                    onPress={() => inicioSecion()}
                >Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registroButton}>
                <Text style={styles.loginButtonText}
                    onPress={() => navigation.navigate('HOMETAB')}
                >Registrate</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 15,
        width: '100%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        borderRadius: 5,
    },
    loginButton: {
        backgroundColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    registroButton: {
        backgroundColor: 'green',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        margin: 10
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    txtInput: {
        borderWidth: 2,
        borderRadius: 10,
        width: '80%',
        height: 40,
        overflow: 'hidden',
        alignSelf: 'center',
        textAlign: 'center',
        margin: 10
    },
    txt: {
        alignSelf: 'center',
        fontSize: 20,
    },
    img: {
        width: 75,
        height: 75,
        margin: 15
    },
});
