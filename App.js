import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddTask from './components/AddTask';
import Task from './components/Task';

export default function App() {
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = (task) => {
    setTaskItems([...taskItems, task]);
  }

  const completeTask = (idx) => {
    let items = [...taskItems];
    items.splice(idx, 1);
    setTaskItems([...items]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, idx) => {
              return (
                  <Task key={idx} text={item} deleteTask={() => completeTask(idx)}/>
              )
            })
          }
        </View>
      </View>
      <AddTask handleAddTask={handleAddTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  }
});
