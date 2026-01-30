import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import {Entypo} from '@expo/vector-icons'
import Tarefa from './src/tarefas';

export default function App() {
  const [tarefa,setTarefa] = useState('');
  const [list, setList] = useState([
  
  ]);

  function guardarTarefa(){
    if(tarefa === ''){
      return
    }
    const dados = {
     key: Date.now(),
     item: tarefa 
    }
    setList(oldList => [dados,...oldList])
    setTarefa('')
  }

  function deletarItem(item){
    let filtrarItem = list.filter((tarefa) => {
      return (tarefa.item !== item)
    })
    setList(filtrarItem)
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tarefas</Text>
      <View style={styles.containerInput}>
        <TextInput placeholder='Digite a sua tarefa' style={styles.input} value={tarefa} onChangeText={(text) => setTarefa(text)}/>
        <TouchableOpacity style={styles.button} onPress={guardarTarefa}>
          <Entypo name="plus" size={20} color="#F0F8FF" />
        </TouchableOpacity>
      </View>

      <FlatList data={list} keyExtractor={(item) => item.key} renderItem={({item}) => <Tarefa data={item} deleteItem={() => deletarItem(item.item)}/>} 
      style = {styles.lista}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#181717ff',
    paddingTop: 20,
  },
  titulo : {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F0F8FF',
    marginTop: '5%',
    paddingStart: '40%',
    marginBottom: 12
  },
  containerInput : {
    flexDirection: 'row',
    width: '100%',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22
  },
  input: {
    width: '75%',
    backgroundColor: '#F0F8FF',
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8
  },
  button :{
    width: '15%',
    height: 44,
    backgroundColor: '#58cbd1ff',
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  lista: {
    flex: 1,
    backgroundColor: '#fff',
    paddingStart: '4%',
    paddingEnd: '4%'
  }
})