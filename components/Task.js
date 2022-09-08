import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import SubTask from "./SubTask";
import SubTaskSvg from "../assets/logos/SubTaskSvg";
import DeleteTaskSvg from "../assets/logos/DeleteTaskSvg";

const Task = (props) => {
    const [modalActive, setModalVisible] = useState(false);
    const [subTask, subTaskHandler] = useState([]);
    const [completedTaskCount, taskCountHandler] = useState(0);

    taskCounter = () => {
        taskCountHandler(completedTaskCount + 1)
    }


    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <Text>{subTask.length ? `${completedTaskCount}/${subTask.length}` : 'No subtasks'}</Text>
            </View>
            <Text style={styles.itemText}>{props.text}</Text>
            <TouchableOpacity
            style={{flexDirection: 'row', justifyContent: 'space-between'}}
            onPress={() => setModalVisible(!modalActive)}>
                <SubTaskSvg />
            </TouchableOpacity>
            <TouchableOpacity
            style={{}}
            onPress={() => props.deleteTask()}>
                    <DeleteTaskSvg />
            </TouchableOpacity>
            <View>
                <Modal
                visible={modalActive}
                onRequestClose={() => setModalVisible(!modalActive)}>
                    <View>
                        <SubTask taskTitle={props.text} subTask={subTask} subTaskHandler={subTaskHandler} taskCountHandler={taskCounter}/>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft : {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square : {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemText : {
        maxWidth: '80%'
    },
    circular : {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5
    },
});

export default Task;