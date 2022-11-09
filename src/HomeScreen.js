import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'
import ParentScreen from '../src/ParentScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = () => {
  const navigation = useNavigation()
  const Stack = createNativeStackNavigator();

  const selectParent = () => {
    navigation.navigate("Parent")
  }

  const selectChild = () => {
    navigation.navigate("Child")
  }

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    
    <View style={styles.container}>
      {/* 테스트용 이메일 확인하는 코드 */}
      <Text>Email: {auth.currentUser?.email}</Text>
        <View style={styles.Box}>
          <View style={styles.align}>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.Selectbutton} onPress={selectParent}
              >
                <MaterialCommunityIcons name="human-male-female-child" size={80} color="black" />
                <Text style={styles.Text}>보호자</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Selectbutton} onPress={selectChild}
              >
                <View style={styles.Box}>
                  <View style={styles.align}>
                    <MaterialCommunityIcons name="human-child" size={80} color="black" />
                    <Text style={styles.Text}>자녀</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#D3D3D3',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  // Box: {
  //   backgroundColor: '#FF8730',
  //   height: 200,
  //   width: 300,
  //   borderRadius: 15,
  //   margin: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  Text: {
    fontSize: 40,
    color: 'black',
  },
  align: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  Selectbutton: {
    backgroundColor: '#FF8730',
    height: 200,
    width: 300,
    borderRadius: 15,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

