import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const MiddleButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touch} onPress={() => alert('맵 넣을 것')}>
                <View style={styles.button1}>
                    <Text style={styles.text1}>목적지</Text>
                    <Text style={styles.text2}>내려야할곳</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.resultSC}>
                <Text style={styles.text}>설정 시간</Text>
            </View>
            <View style={styles.buttonline}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F3F3',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    touch:{
        width:'90%',
        height:'35%',
        margin: '10%'
    },
    button1:{
        flex:3,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    resultSC: {
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        width: '90%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    buttonline: {
        backgroundColor: 'black',
        width: '100%',
        height: '0.5%',
        marginTop: 120,
    },
    text1: {
        flex:1,
        justifycontent: 'flex-start',
        paddingTop: 20,
        paddingLeft: 20,
        fontSize: 30,
        color: '#FF8730',
    },
    text2: {
        flex:2,
        textAlign: 'center',
        paddingLeft: 20,
        paddingTop: 20,
        fontSize: 30,
        color: '#000000',
    },
    Plus: {
        fontSize: 100,
        color: '#FF8730',
    },
})

export default MiddleButton;