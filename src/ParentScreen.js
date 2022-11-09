import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MiddleButton from './Middlebutton';
import { Ionicons } from '@expo/vector-icons';

const ParentScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>###님의 보호자 ###</Text>
                <TouchableOpacity>
                    <Ionicons style={styles.icon} name="settings" size={35} color="black" />
                </TouchableOpacity>
            </View>
            <MiddleButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D3D3D3',
        flex: 1,
    },
    text: {
        marginLeft: 20,
        marginTop: 50,
        fontSize: 28,
        color: 'black',
    },
    icon: {
        marginRight: 20,
        marginTop: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default ParentScreen;
// 보호자 화면