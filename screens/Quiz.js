import { View, TouchableOpacity,Text,StyleSheet } from 'react-native'
import React, { useEffect,useState } from 'react'



const shuffleArray=(array)=> {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({navigation}) => {
  const[questions,setQuestions]=useState(null)
  const[quesNum,setQuesNum]=useState(0)
  const[options,setOPtions]=useState([])
  const[score,setScore]=useState(0)
  const getQuiz = async () => {
    const baseUrl = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple';
    try {
      const res = await fetch(baseUrl);
      const data = await res.json();
      console.log(data.results);
      setQuestions(data.results);
      setOPtions(generateOptionAndShuffle(data.results[0]));
    } catch (error) {
      console.error('Error fetching quiz:', error);
      // Handle error as needed
    }
  };
  const handleSelection=(_options)=>{
    if(_options===questions[quesNum].correct_answer){
      setScore(score+10)
    }
    if(quesNum!==9){
      setQuesNum(quesNum+1)
    setOPtions(generateOptionAndShuffle(questions[quesNum+1]))
    }
    

  }
  const handleNext = () => {
    if (quesNum < questions.length - 1) {
      setQuesNum(quesNum + 1);
      setOPtions(generateOptionAndShuffle(questions[quesNum + 1]));
    }
  };
  
  useEffect(()=>{
    getQuiz()
  }
    

  ,[])

  const generateOptionAndShuffle=(_question)=>{
    const options=[..._question.incorrect_answers]
    options.push(_question.correct_answer)
    shuffleArray(options)
    return options

  }
  return (
    <View style={styles.container}>
    {questions &&
   (<View>
      <View style={styles.top}>
        <Text style={styles.question}>Q. {decodeURIComponent(questions[quesNum].question)}</Text>
      </View>
      <View style={styles.optional}>
        <TouchableOpacity style={styles.optionButton} onPress={()=>{handleSelection(options[0])}}>
          <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=>{handleSelection(options[1])}}>
          <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=>{handleSelection(options[2])}}>
          <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=>{handleSelection(options[3])}}>
          <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
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