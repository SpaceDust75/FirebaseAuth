import { useNavigation } from '@react-navigation/core'
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import MiddleButton from './src/MiddleButton';

const ParentScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.text}>###님의 보호자 ###</Text>
            {/* <MiddleButton /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D3D3D3',
        flex: 1,
    },
    text: {
        marginLeft: 10,
        marginTop: 50,
        fontSize: 28,
        color: 'black',
    },
})

export default ParentScreen;
// 보호자 화면