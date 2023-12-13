import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Platform} from 'react-native';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Results from './screens/Results';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {

const Stack = createNativeStackNavigator();
  
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}} />
        <Stack.Screen name="Results" component={Results} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    
  },
});
