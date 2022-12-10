import React, { useState } from 'react';
import { Text, TextInput, View, SafeAreaView, Pressable, Alert } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';

const Login = ({ navigation }: { navigation: any }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function confirmLogin(param:any) {

        if (param.localeCompare('email')==0){
        Alert.alert("Invalid Email", "Please input Email: rn@rn.com", [
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
            }
          ]
        );
    }
    else{
        Alert.alert("Invalid Password", "Pleas input password: qwerty12", [
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
            }
          ]
        );
    }
      }

    return (
        <SafeAreaView style={globalStyles.wrapperGuest}>
            <Text style={globalStyles.titleLogin}>Barrie Newz</Text>
            <View>
                <TextInput 
                placeholder="Email" 
                style={globalStyles.formInput} 
                onChangeText={newEmail => setEmail(newEmail)} 
                keyboardType="email-address"/>

                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    style={globalStyles.formInput}
                    onChangeText={newPassword => setPassword(newPassword)}
                    keyboardType="default"
                />
            </View>
            <Pressable style={globalStyles.buttonLogin} onPress={() => 
            {
                if(email.localeCompare('rn@rn.com')!=0){
                    
                    confirmLogin('email')
                    return;
                }
                else if(password.localeCompare('qwerty12')!=0){
                    
                    confirmLogin('pw')
                    return;
                }
                 else {
                    navigation.navigate('Home')
                }}}>
            {/* <Pressable style={globalStyles.buttonLogin} onPress={() => navigation.reset({index: 0, routes: [{name: 'Home'}]})}> */}
                <Text style={globalStyles.buttonText}>Sign In</Text>
            </Pressable>
            <Text style={globalStyles.buttonTextLink} onPress={() => navigation.navigate('Register')}>Don't have an account? Sign Up Now</Text>
        </SafeAreaView>
    )
}

export default Login;
