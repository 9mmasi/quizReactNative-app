import { View, TouchableOpacity,Text,StyleSheet } from 'react-native'
import React, { useEffect,useState } from 'react'

const Quiz = ({navigation}) => {
  const[questions,setQuestions]=useState([])
  const getQuiz=async()=>{
    const baseUrl='https://opentdb.com/api.php?amount=10&type=multiple';
    const res=await fetch(baseUrl)
    const data = res.json()
    console.log(data)
    setQuestions(data)
  }
  useEffect(()=>{
    getQuiz()
  }
    

  ,[])
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.question}>Q.Imagine these is the real cool question</Text>
      </View>
      <View style={styles.optional}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Optional 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Optional 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Optional 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.option}>Optional 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Skip</Text>
        </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default Quiz
const styles = StyleSheet.create({
  container:{
    paddingTop:40,
  paddingHorizontal:20,
  height:'100%',
  },
  top:{
    marginVertical:16

  },
  optional:{
    marginVertical:16,
    flex:1
  },
  bottom:{
    paddingVertical:16,
    marginBottom:12,
    justifyContent:'space-between',
    flexDirection:'row'

  },
  button:{
    backgroundColor:'#314357',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:12,
    borderRadius:16,
    padding:14,
    
  
  },
  text:{
    color:'#fff',
    fontSize:14,
    fontWeight:'600'
  },
  option:{
    fontSize:18,
    color:'#fff'
  },
  question:{
    fontSize:28,
  },
  optionButton:{
    paddingVertical:12,
    marginVertical:6,
    backgroundColor:'#314357',
    paddingHorizontal:12,
    borderRadius:12
  },

});