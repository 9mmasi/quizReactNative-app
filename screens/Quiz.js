import { View, TouchableOpacity,Text,StyleSheet } from 'react-native'
import React from 'react'

const Quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>Imagine these is the real cool question</Text>
      </View>
      <View style={styles.optional}>
        <TouchableOpacity>
          <Text>Optional 1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Optional 2</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Optional 3</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Optional 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
      <TouchableOpacity>
          <Text>Skip</Text>
        </TouchableOpacity>
      
      <TouchableOpacity>
          <Text>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Text>End</Text>
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

  }

});