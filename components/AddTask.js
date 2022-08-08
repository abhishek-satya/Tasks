import React, { useState } from "react";
import { View, Text, TextInput,KeyboardAvoidingView, TouchableOpacity, StyleSheet, Keyboard, Alert } from "react-native";

const AddTask = (props) => {
    const [task, setTask] = useState();

    const taskHandler = () => {
        if (task) {
            Keyboard.dismiss();
            props.handleAddTask(task);
            setTask(null);
        } else Alert.alert('Please enter a valid task');
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Write a Task'} value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => taskHandler()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addTask}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addTask: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 0
    },
})

export default AddTask;