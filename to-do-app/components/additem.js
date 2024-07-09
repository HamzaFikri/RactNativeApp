import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function AddItem({submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)

    }

    return(
        <View>
            <TextInput
                style={StyleSheet.input}
                placeholder='new todo ...' 
                onChangeText={(val) => changeHandler(val)}
            />
            <Button onPress={() => submitHandler(text) } title='Add' color='purple' />
        </View>
    )
  }

  const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
  })