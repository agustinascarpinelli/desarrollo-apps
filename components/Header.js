import { StyleSheet,TextInput,View } from "react-native";
import { Colors } from "../Styles/colors";
import ButtonCustom from "./ButtonCustom";
import React from "react";
import { useState } from "react";

const Header=({handleAdd})=>{
    const [input,setInput]=useState("")
    const handleAux =()=>{
        if (input !==""){
            handleAdd(input)
            setInput("")
        }
    }
    return(
        <View style={styles . topContainer}>
            <TextInput style={styles .input} placeholder="to do" onChangeText={setInput} value={input}/>
            <ButtonCustom onPress={()=>handleAux()}/>
        </View>
    )
}

export default Header;

const styles =StyleSheet.create({
    topContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        padding:10,
        flex:0.2,
    },

    input:{
        width:250,
        paddingHorizontal:10,
        backgroundColor:Colors .lightPink,
        fontSize:18,
        height:35,
        borderRadius:8,
        marginHorizontal:10
        
    },
})