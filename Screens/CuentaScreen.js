import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'

export default function CuentaScreen() {


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Mi Cuenta</Text>
            <Image
                style={styles.img}
                source={require('../assets/images/usuario.png')}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Nombre:</Text>
                <Text style={styles.info}></Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Correo Electrónico:</Text>
                <Text style={styles.info}></Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Fecha de Nacimiento:</Text>
                <Text style={styles.info}></Text>
            </View>
            <Button title="Cerrar Sesión" onPress={() => alert('Sesión cerrada')} />
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    infoContainer: {
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10
    },
    info: {
        fontSize: 16,
    },
    img: {
        width: 200,
        height: 200,
    }
});
