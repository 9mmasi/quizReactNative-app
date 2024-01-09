import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import AwardImage from '../assets/award.png'; // Import the award image
import FailImage from '../assets/fail.png';
import Title from '../components/Title'

const Home = ({navigation,route}) => {
  const {score}=route.params
  const resultBanner=score>40? AwardImage : FailImage; 
  return (
    <View style={styles.container}>
      <Title />
      <Text style={styles.scoreText}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image resizeMode='contain' style={styles.banner} source={{uri:resultBanner}} />
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.text}>Home</Text>
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
scoreText:{
  textAlign:'center',
  color:'#000',
  fontSize:24,
  fontWeight:'600'
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
