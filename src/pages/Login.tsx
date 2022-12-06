import React from 'react';
import { Text, TextInput, View, SafeAreaView, Pressable } from 'react-native';

import { globalStyles } from '../../styles/globalStyles';

const Login = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={globalStyles.wrapperGuest}>
            <Text style={globalStyles.titleLogin}>Barrie Newz</Text>
            <View>
                <TextInput placeholder="Email" style={globalStyles.formInput} />
                <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    style={globalStyles.formInput}
                />
            </View>
            <Pressable style={globalStyles.buttonLogin} onPress={() => navigation.reset({index: 0, routes: [{name: 'Home'}]})}>
                <Text style={globalStyles.buttonText}>Sign In</Text>
            </Pressable>
            <Text style={globalStyles.buttonTextLink} onPress={() => navigation.navigate('Register')}>Don't have an account? Sign Up Now</Text>
        </SafeAreaView>
    )
}

export default Login;
