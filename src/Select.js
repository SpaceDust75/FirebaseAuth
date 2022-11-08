import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const Adult = () => {
    return(
        <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => alert('보호자')}
                    >
                <View style={styles.Box}>
                        <View style={styles.align}>
                        <MaterialCommunityIcons name="human-male-female-child" size={80} color="black" />
                        <Text style={styles.Text}>보호자</Text>
                        </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('자녀')}
                    >
                <View style={styles.Box}>
                        <View style={styles.align}>
                        <MaterialCommunityIcons name="human-child" size={80} color="black" />
                        <Text style={styles.Text}>자녀</Text>
                        </View>
                </View>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        backgroundColor:'#D3D3D3',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    Box:{
        backgroundColor:'#FF8730',
        height: 300,
        width: 300,
        borderRadius: 15,
        margin: 20,
        alignItems:'center',
        justifyContent:'center',
    },
    Text:{
        fontSize:40,
        color:'black',
    },
    align:{
        flexDirection: 'row',
        alignItems:'center',
    },
    
})

export default Adult;
// 부모 자녀 선택 화면