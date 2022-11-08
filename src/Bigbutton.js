import React from "react";
import { Text,View,StyleSheet, Button, TouchableOpacity } from "react-native";

const BigButton = () => {
    return (
    
    <View style={styles.container}>    
        <TouchableOpacity onPress={() => alert('맵 넣을 것')}> 
        <View style={styles.button}>
            <Text style={styles.Plus}>+</Text>
            <Text style={styles.text}>내려야하는 정류장</Text>
        </View>
        </TouchableOpacity>
    </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#D3D3D3',
        justifyContent: 'center',
        alignItems:'center',
      },
    button:{
        backgroundColor:'#FFFFFF',
        marginTop:50,
        width:'100%',
        height:'70%',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center',
        padding: 50,
    },
    text:{
        fontSize:30,
        color:'#FF8730',
    },
    Plus:{
        fontSize:100,
        color:'#FF8730',
        fontWeight: 'bold',
    },
})

export default BigButton;