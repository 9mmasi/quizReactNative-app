import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Title from '../components/Title'

const Results = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image resizeMode='contain' style={styles.banner} source={require('../assets/result.png')} />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Results

const styles = StyleSheet.create({
  banner: {
    height:300,
    width:300
} , 
bannerContainer:{
  alignItems:'center',
},
container:{
  paddingTop:40,
  paddingHorizontal:20,
  height:'100%',
}
});
