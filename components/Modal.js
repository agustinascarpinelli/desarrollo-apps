import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../Styles/colors";

const CustomModal = ({
  modalVisible,
  setModalVisible,
  handleEdit,
  todoSelected,
  handleDelete,
  handleEditTodo,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.cross}>x</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            onChangeText={handleEdit}
            value={todoSelected.todo}
          />
          <TouchableOpacity onPress={handleDelete}>
            <Text style={styles.textModal}>Delete to do</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEditTodo}>
            <Text style={styles.textModal}>Change to do</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles=StyleSheet.create({
    modalContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      

    },
    content:{
        backgroundColor:Colors.oldRose,
        width:300,
        height:150,
        borderRadius:8,
        
    },
    input:{
        backgroundColor:Colors.lightBrown,
        width:200,
        borderRadius:8,
        marginRight:10,
        height:35,
        paddingHorizontal:8,
        marginLeft:10,
    },
    textModal:{
      backgroundColor:Colors.pink,
      width:100,
      borderRadius:8,
      marginLeft:10,
      marginTop:10,
      padding:4,
      color:Colors.lightPurple,
    
    },
    cross:{
      margin:10,
      color:Colors.pink,

    },

})
