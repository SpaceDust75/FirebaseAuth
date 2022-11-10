import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from "react-native"
import { useNavigation } from '@react-navigation/core'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Dep = (props) => {
    console.log(props.route.params);
    const navigation = useNavigation()
    const Stack = createNativeStackNavigator();

    const registerDST = () => {
        navigation.push("Parent", (props.route.params))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.Text}>도착지</Text>
            <TextInput style={styles.inputtext} editable maxLength={30} />
            <TouchableOpacity style={styles.register} onPress={registerDST}>
                <Text style={{ color: 'black', fontSize: 20 }}>등록</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D3D3D3',
        flex: 1,
        justifyContent: 'center',
    },
    Text: {
        marginLeft: 15,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    inputtext: {
        backgroundColor: 'white',
        paddingLeft: 15,
        fontSize: 18,
        height: '5%',
        width: '94%',
        borderRadius: 15,
        margin: 10,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    register: {
        backgroundColor: '#FF8730',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 10,
        width: 80,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        color: 'black',

    },
})

export default Dep;
//출발지 목적지 설정 화면