import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { Colors } from "../Styles/colors";
import React from "react";

const ButtonCustom =({onPress})=>{
    return(
        <TouchableOpacity style={styles .button} onPress={onPress}>
            <Text style={styles .text}>Add to do</Text>
        </TouchableOpacity>
    )
}

export default ButtonCustom;

const styles =StyleSheet.create({
    button:{
        backgroundColor:Colors.pink,
        borderRadius:8,
        paddingHorizontal:10,
        paddingVertical:5,
        
    },
    text:{
        color:Colors .lightPurple
    },
})