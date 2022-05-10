import {
  Text,
  View,
  StyleSheet,
} from "react-native";
import { Colors } from "../Styles/colors";
import { useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import CustomModal from "../components/Modal";

const Layout = () => {
  const [todoList, setTodoList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [todoSelected, setTodoSelected] = useState({});

  const handleAdd = (input) => {
    if (input !== "") {
      setTodoList([...todoList, { id: Date.now(), todo: input }]);
    }
  };

  const handleModal = (todoSelected) => {
    setModalVisible(true);
    setTodoSelected(todoSelected);
  };
const handleEditTodo=()=>{
  setModalVisible(false)
}
  const handleEdit=(text)=>{
      const toDoEdit=todoList.find(todo=>todo.id===todoSelected.id)
      toDoEdit.todo=text
      setTodoList([...todoList])
  }

  const handleDelete = () => {
    const todosFiltered = todoList.filter((item) => item.id !== todoSelected.id);
    setTodoList(todosFiltered);
    setModalVisible(false);
  };

 
  return (
    <View style={styles.container}>
       <Text style={styles.header}>To do List</Text>
    <Header handleAdd={handleAdd}/>
      <List handleModal={handleModal} todoList={todoList}/>
      <CustomModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      todoSelected={todoSelected}
      handleEditTodo={handleEditTodo}/>
    </View>
  );
};

export default Layout;

const styles=StyleSheet.create({
    container:{
        backgroundColor:Colors.oldRose,
        padding:25,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        height:'100%',
    },
    header:{
marginTop:50,
color:Colors.pink,
fontWeight:'bold',
fontSize:20,
textDecorationLine:'underline',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    },
})
