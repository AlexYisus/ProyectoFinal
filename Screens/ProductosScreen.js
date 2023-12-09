import { View, Text, StyleSheet, SectionList, Image, Button, Alert, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import licoreriaJSON from '../assets/data/licoreria.json'
import * as FileSystem from 'expo-file-system'


export default function ProductosScreen({ navigation }) {

    const [licores, setlicores] = useState([])
    const [cantidadMaxima, setCantidadMaxima] = useState(5);

    const datosLicores = licoreriaJSON;
    const secciones = [
        {
            title: 'Productos Ofertados', data: datosLicores.licores
        }
    ]

    useEffect(() => {
        cargar()
    }, [])



    function enviar(item) {

        if (licores.length <= cantidadMaxima) {
            setlicores([...licores, item])
            setCantidadMaxima(cantidadMaxima - 1)
            guardar();
        } else {
            Alert.alert("Mensaje", "No ce agregan mas productos")
        }
    }

    const guardar = async () => {
        try {
            const file = `${FileSystem.documentDirectory}licoreria.json`;
            await FileSystem.writeAsStringAsync(file, JSON.stringify(licores));
            console.log("Datos guardados")
        } catch (error) {
            console.log(error)
        }
    }

    const cargar = async () => {
        try {
            const file = `${FileSystem.documentDirectory}licoreria.json`;
            const existe = await FileSystem.getInfoAsync(file)

            if (existe.exists) {
                const contenido = await FileSystem.readAsStringAsync(file);
                const datos = JSON.parse(contenido)
                setlicores(datos);
                console.log("Datos cargados")
            }

        } catch (error) {
            console.log(error)
        }
    }

    function navegarAlCarrito() {
        navigation.navigate('Carrito', { licores }); // Pasa los licores al carrito
    }

    return (
        <View style={styles.container}>
            <SectionList sections={secciones}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.txtNombre}>{item.name}</Text>
                        <Text style={styles.txtInfo} >{item.description}</Text>
                        <Text style={styles.txtInfo} >{item.precio}</Text>
                        <View style={styles.container}>
                            <Image style={styles.img} source={{ uri: item.image }} />
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => enviar(item)}

                            >
                                <Text style={styles.buttonTxt}>Añadir al Carrito</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                )}

                renderSectionHeader={({ section }) => (
                    <View >
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#696934', textAlign: 'center' }} >{section.title}</Text>
                    </View>
                )
                }

            />
            <View
                style={{ borderWidth: 1, width: "90%", marginBottom: 10, marginTop: 10 }}
            />


            <View>
                <Button title="Ver Carrito" onPress={navegarAlCarrito} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

    txtNombre: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: 5,
        color: '#060606'
    },

    txtInfo: {
        fontSize: 16,
        color: '#060606',
        textAlign: 'center'
    },

    img: {
        width: 100,
        height: 100,
        alignItems: 'center'
    },

    button: {
        width: 120,
        height: 50,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8a2be2',
        marginTop: 5
    },
});