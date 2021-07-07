import React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginForm = () => {
    const nav = useNavigation()

    return(
        <View>
            <Text>Login</Text>
            <Text>Username</Text>
            <TextInput defaultValue='' style={{borderColor: 'black', borderWidth: 1}}/>
            <Text>Password</Text>
            <TextInput defaultValue='' style={{borderColor: 'black', borderWidth: 1}}/>
            <Button title='Submit' onPress={() => nav.navigate('Hello')}/>
        </View>
    )
}


export default LoginForm






