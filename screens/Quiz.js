import { View, TouchableOpacity,Text,StyleSheet } from 'react-native'
import React, { useEffect,useState } from 'react'

const Quiz = ({navigation}) => {
  const[questions,setQuestions]=useState(null)
  const[quesNum,setQuesNum]=useState(0)
  const getQuiz = async () => {
    const baseUrl = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple';
    try {
      const res = await fetch(baseUrl);
      const data = await res.json();
      console.log(data.results);
      setQuestions(data.results);
    } catch (error) {
      console.error('Error fetching quiz:', error);
      // Handle error as needed
    }
  };
  const handleNext=()=>{
    if (quesNum < questions.length - 1) {
      setQuesNum(quesNum + 1);
    }
  }
  useEffect(()=>{
    getQuiz()
  }
    

  ,[])
  return (
    <View style={styles.container}>
    {questions &&
   (<View>
      <View style={styles.top}>
        <Text style={styles.question}>Q. {questions[quesNum].question}</Text>
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
      
      {quesNum!==9 &&(<TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.text} >Next</Text>
        </TouchableOpacity>)}
        {quesNum===9 &&(<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Results')}>
          <Text style={styles.text} 
          >Show Result</Text>
        </TouchableOpacity>)}
        
      </View>
      </View>) }
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
    backgroundColor:'#92E3A9',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:12,
    borderRadius:16,
    padding:14,
    
  
  },
  text:{
    color:'#000',
    fontSize:14,
    fontWeight:'600'
  },
  option:{
    fontSize:18,
    color:'#000'
  },
  question:{
    fontSize:28,
  },
  optionButton:{
    paddingVertical:12,
    marginVertical:6,
    backgroundColor:'#92E3A9',
    paddingHorizontal:12,
    borderRadius:12
  },

});