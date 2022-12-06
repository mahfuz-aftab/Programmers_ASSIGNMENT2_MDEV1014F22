import React from 'react';
import { Text, View, SafeAreaView, Pressable, TextInput, Alert } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';


const Register = ({ navigation }: { navigation: any }) => {
  function confirmSignup() {
    Alert.alert("Sign Up Confirmation", "Is your all input correct?", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        { text: "OK", onPress: () => navigation.navigate('Home') }
      ]
    );
  }

  return (
    <SafeAreaView style={globalStyles.wrapperGuest}>
      <Text style={globalStyles.formLabel}>Sign Up</Text>
      <View>
        <TextInput placeholder="First Name" style={globalStyles.formInput} />
        <TextInput placeholder="Last Name" style={globalStyles.formInput} />
        <TextInput placeholder="Email" style={globalStyles.formInput} />
        <TextInput secureTextEntry={true} placeholder="Password" style={globalStyles.formInput} />
      </View>

      <Pressable style={globalStyles.buttonSignup} onPress={confirmSignup}>
        <Text style={globalStyles.buttonText}>Sign Up</Text>
      </Pressable>
      <Text style={globalStyles.buttonTextLink} onPress={() => navigation.navigate('Login')}>Already have an account? Sign In Now</Text>
    </SafeAreaView>
  )
}

export default Register;
