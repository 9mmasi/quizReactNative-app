import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Title from '../components/Title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image resizeMode='contain' style={styles.banner} source={require('../assets/test.png')} />
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Quiz')}>
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  banner: {
    height:300,
    width:300
} , 
bannerContainer:{
  alignItems:'center',
  flex:1,
  justifyContent:'center',
  alignItems:'center'
},
container:{
  paddingTop:40,
  paddingHorizontal:20,
  height:'100%',
  
  
},
button:{
  backgroundColor:'#92E3A9',
  width:'100%',
  alignItems:'center',
  justifyContent:'center',
  marginBottom:12,
  borderRadius:16,
  padding:12,
  

},
text:{
  color:'#000',
  fontSize:24,
  fontWeight:'600'
}
});
