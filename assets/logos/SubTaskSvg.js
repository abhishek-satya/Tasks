import React from 'react'
import { StyleSheet, View, Image } from 'react-native';

function SubTaskSvg() {
  return (
    <View style={styles.image}>
        <Image source={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABPklEQVRIie2XTU7DMBBGHyySO5QrZEc3TTkA3IX2FqXlYrSs4AyFVGIHlH1ZZCwNkR3/NK6E1JFGicaj78UzjuNAvBXAI7ADGmApsey2Ag4dfzgFuBFYDUzlvokVuXTEdTm7sxtJzoXKH1nyktpgK2eqR7XBlHOiYm8BkK3Kr0logxHSdueBb4HbAJ1ocIo5dVyLK7v9G3AJzIEN8CO+AWYydrTZenMFvOJeXC+S49OJApceqIaXPTrR4HkA1Pj9kOBnB+QDuAZuVGw9JHjfEf4UaCXjYzX+nQNsZlMpaCUPkQVsSv2lgDbo4KWe8bevY/EudPDFVdK+KiGvU9GjEw2GdnPog2fZQIwVtKVc0y64PfAkMdtJ4/xZ9IJ3cq2P0J7KNerosyR8b/b5IgZcCNwc+lL8XaAn+cs4m9N+AVRN/3iA5OahAAAAAElFTkSuQmCC"}}
        style={styles.icon}>
        </Image>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        border: 0,
        padding: 0,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    icon: {
        width: 20,
        height: 20
    }
})

export default SubTaskSvg