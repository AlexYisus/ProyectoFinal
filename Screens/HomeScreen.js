import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'


export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.txtTit}>Licorería El Tacos</Text>
            <Image style={styles.img} source={{ uri: "" }} />
            <Text style={styles.promo}>¡Disfruta de las mejores promociones en productos seleccionados!</Text>
            <Image style={styles.imgWis} source={{ uri: "https://licoreslarebaja.com/img/cms/WHISKY%20CALI.png" }} />
            <Image style={styles.imgProm} source={{ uri: "https://licoreschullavida.com/wp-content/uploads/2020/11/Combo-Jack-Daniel-Honey.jpg" }} />

            <View style={styles.fila}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Productos')}
                >
                    <Text style={styles.buttonTxt}>Productos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonInfo}
                    onPress={() => navigation.navigate('Carrito')}
                >
                    <Text style={styles.buttonTxt}>Carrito</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    img: {
        width: 200,
        height: 200,
        margin: 10,
        borderRadius: 85,
        marginLeft: 200,
        marginTop: -140
    },

    txtTit: {
        width: 200,
        height: 90,
        borderWidth: 1,
        fontSize: 30,
        borderRadius: 23,
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: '#8a2be2',
        marginTop: 15,
        marginLeft: 5
    },

    fila: {
        flexDirection: 'row'
    },

    imgWis: {
        width: 150,
        height: 120,
    },
    promo: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '500',
        color: '#060606'
    },

    variedad: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '500',
        color: '#060606'
    },

    imgProm: {
        width: 300,
        height: 150,
        margin: 10
    },

    button: {
        width: 150,
        height: 60,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8a2be2',
        marginTop: 1
    },

    buttonInfo: {
        width: 150,
        height: 60,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#308171',
        marginTop: 1
    },

    buttonTxt: {
        fontSize: 20,
        fontWeight: '500'

    },

    fila: {
        flexDirection: 'row'
    }

});
