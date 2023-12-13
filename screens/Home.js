import { View, Text ,StyleSheet,Image,TouchableOPacity} from 'react-native'
import React from 'react'
import Title from '../components/Title'

const Home = () => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
        <Image resizeMode='contain' style={styles.banner} source={require('../assets/test.png')} />
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
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
}
});
