import { FlatList, StyleSheet, Text,View } from "react-native";
import React from "react";
import Item from "./Item";
import { Colors } from "../Styles/colors";

const List=({handleModal,todoList})=>{
    const renderTodo = ({ item }) => (
        <Item onPress={handleModal} todo={item}></Item>
      );
      return(
        
        <View style={styles.itemList}>
         
        {todoList.length !== 0 && (
          <FlatList
            data={todoList}
            keyExtractor={(todo) => todo.id}
            renderItem={renderTodo}
          />
        )}{todoList.length==0 &&   <Text style={styles.textTodo}>There's no to do in the list</Text>}
         
      </View>
      )
}

export default List;

const styles=StyleSheet.create({
    itemList:{
        backgroundColor:Colors.lightPink,
        width:'95%',
        padding:20,
        flex:0.8,
        borderRadius:8,
    },
    textTodo:{
      color:Colors.lightPurple,
    },
})