import React from 'react'
import { View, Image } from 'react-native'

function DeleteTaskSvg() {
  return (
    <View>
        <Image source={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAWklEQVRIiWNgGCmggYGB4T8a7iDXsKNYDCMWH0Y3jAmLBf/IdRnUkmEGGHGIk+tVDPOwxQFVwagFoxaMWjBqAQUWPCHDrMekKPaEaiC2JnvEwMDgQYajhgAAAHQzJawIGW+JAAAAAElFTkSuQmCC"}} 
        style={{ width: 20, height: 20}}></Image>
    </View>
  )
}

export default DeleteTaskSvg