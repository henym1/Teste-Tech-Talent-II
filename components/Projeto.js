import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Projeto = (props) => {

    return (
       <View style={styles.item}>
        <View style={styles.itemEsquerda}>
            <View style={styles.quadrado}></View>
            <Text style={styles.itemTexto}>{props.text}</Text>
        </View>
        <View style={styles.circulo}></View>
       </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#CAFF70',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemEsquerda: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    quadrado: {
        width: 24,
        height: 24,
        borderRadius: 5,
        backgroundColor: '#006400',
        opacity: 0.4,
        marginRight: 15,
    },
    itemTexto: {
        maxWidth: '80%',
    },
    circulo: {
        width: 12,
        height: 12,
        borderColor: '#006400',
        borderWidth: 2,
        borderRadius: 5,
    },
    
});


export default Projeto;