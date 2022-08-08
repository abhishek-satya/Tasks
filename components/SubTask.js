import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function SubTask(props) {
  return (
    <View style={styles.subTaskWrapper}>
        <Text style={styles.text}>{`${props.taskTitle}'s sub tasks`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    subTaskWrapper: {
        paddingTop: 40,
        paddingHorizontal: 20
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default SubTask