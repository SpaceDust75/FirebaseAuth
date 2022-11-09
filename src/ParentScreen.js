import React from 'react';
import { useNavigation } from '@react-navigation/core'
import { RefreshControl, SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MiddleButton from './Middlebutton';
import { AntDesign } from '@expo/vector-icons';
import { auth } from '../firebase'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const ParentScreen = () => {
    const navigation = useNavigation()
    const Stack = createNativeStackNavigator();
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.navigate("Login")
            })
            .catch(error => alert(error.message))
    }
    return (

        <View View style={styles.container} >
            <View style={styles.header}>
                <View style={styles.headertext}>
                    <Text style={styles.text}>보호자 화면</Text>
                </View>
                <View style={styles.headericon}>
                    <TouchableOpacity style={styles.reloadicon}>
                        <AntDesign name="reload1" size={30} color="black" style={{ color: '#4D4A4A', paddingTop: 47 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logouticon} onPress={handleSignOut}>
                        <AntDesign name="logout" size={28} color="black" style={{ color: '#4D4A4A', paddingRight: 25, paddingLeft: 20, paddingTop: 49 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <MiddleButton />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F3F3',
        flex: 1,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingTop: 20,
    },
    headertext: {
        flex: 4,
        paddingleft: 10,
    },
    headericon: {
        flex: 2,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    text: {
        marginLeft: 25,
        marginTop: 50,
        fontSize: 24,
        color: '#4D4A4A',
    },

})

export default ParentScreen;
// 보호자 화면