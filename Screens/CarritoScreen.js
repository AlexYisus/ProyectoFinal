import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system'

export default function CarritoScreen({route}) {

    const {licores}=route.params;


    const [numero1, setnumero1] = useState(0)

    function aumentar() {
        setnumero1(numero1 + 1)
    }

    const datosLic = [
        {
            id: 'norto',
            name: 'Norteño',
            description: 'Aguardiente semiseco anisado con un grado alcohólico del 27%'
        },
        {
            id: 'antioq',
            name: 'Antioqueño',
            description: 'Aguardiente Antioqueño azul'
        },
        {
            id: 'zhum',
            name: 'Zhumir',
            description: 'Zhumir Pink botella 750ml'
        },
        {
            id: 'caña',
            name: 'Caña Manabita',
            description: 'Caña Manabita media'
        },

        {
            id: 'cheine',
            name: 'Heineken',
            description: 'Six Pack Heineken 269ml'
        }
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.txtCateg}>Mi Carrito</Text>
            <FlatList

                data={licores}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.lista}>
                        <Text>Nombre: {item.name}</Text>
                        <Text>Descripción: {item.description}</Text>
                        <Text>Precio: {item.precio}</Text>
                    </View>
                )}
            />
            <Text>{numero1}</Text>
            <Button title='Aumentar' onPress={() => aumentar()} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 70
    },

    img: {
        width: 150,
        height: 150
    },

    txtCategor: {
        fontSize: 20,
        borderWidth: 2,
        margin: 5,
        textAlign: 'center'
    },

    btnTouch: {
        backgroundColor: "#3a9865",
        marginBottom: 15,
        borderRadius: 15,
        height: 70,
        padding: 10,
        elevation: 5,
        shadowColor: "#626262",
        alignItems: 'center'
    },

    txtCateg: {
        fontSize: 30
    }

});
