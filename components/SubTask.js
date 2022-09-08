import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

function SubTask(props) {
  return (
    <View style={styles.subTaskWrapper}>
        <Text style={styles.text}>{props.taskTitle}</Text>
        <View>
        {
          props.subTask.map((task, idx) => {
            return (
              <View key={idx}>
                <Text>{task}</Text>
                <Button onPress={() => props.taskCountHandler()}></Button>
              </View>
            )
          })
        }
        </View>

        <View style={styles.subTask}></View>
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