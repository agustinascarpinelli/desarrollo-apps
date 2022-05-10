import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Colors } from "../Styles/colors";
import React,{useState} from "react";


const Item = ({ todo, onPress }) => {
    const [check,setcheck]=useState(true)
    

  return (
      <View style={styles.container}>
    <View style={styles.itemContainer }>
    <TouchableOpacity onPress={() => onPress(todo)}>
    <Text style={styles.text}>{todo.todo}</Text>
  </TouchableOpacity>
    </View>
    {(check===true)&&   <TouchableOpacity onPress={()=> setcheck(false)} style={styles.notchecked}>
         <Text> Done </Text>
      </TouchableOpacity>}
      {(check===false)&& <TouchableOpacity style={styles.checked}>
        <Text> Done </Text>
      </TouchableOpacity>}
   
  </View>
  );
};
export default Item;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',

    },
  itemContainer: {
    backgroundColor: Colors.oldRose,
    borderRadius: 8,
    marginBottom: 10,
    padding:4,
    width:250,

    
  },

  text: {
    color: Colors.lightPurple,
  },

  notchecked:{
      
      marginBottom: 10,
      padding:4,
      borderRadius:8,
     marginLeft:5,
  },
  checked:{
    backgroundColor:Colors.pink,
    marginBottom: 10,
    padding:4,
    borderRadius:8,
   marginLeft:5,
},
  
 
})
