import React from 'react';
import { RefreshControl, SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MiddleButton from './Middlebutton';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const ParentScreen = () => {
    return (
        
            <View View style={styles.container} >
                    <View style={styles.header}>
                        <View style={styles.headertext}>
                            <Text style={styles.text}>###님의 보호자 ###</Text>
                        </View>
                        <View style={styles.headericon}>
                            <TouchableOpacity style={styles.reloadicon}>
                                <AntDesign name="reload1" size={30} color="black" style={{ color: '#4D4A4A', paddingTop: 47 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.logouticon}>
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