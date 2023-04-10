import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import Call from "./Call";
import Home from "./Home";
import Status from "./Status";
import Mytab from "./Mytab";
import Head from './Head';
import { EvilIcons,Entypo,MaterialIcons,Ionicons } from '@expo/vector-icons';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator 
    // initialRouteName='WhatsApp' screenOptions={{
      screenOptions ={{
         headerMode: 'screen',
         headerShown:false,

         
      // headerTintColor: 'white',
      // headerStyle: { backgroundColor: 'green' },
     // headerRight:<FontAwesome name="search" size={24} color="black" />
      }}
    >
      
      <Stack.Screen name='head' component={Head} option={{
        headerShown:false,
      }}/>
      <Stack.Screen name= "WhatsApp" component ={Mytab} option ={{fontWeight: 'bold',
      }}/>
     <Stack.Screen name="Chat" component={Home} option ={{fontWeight: 'bold',
     }}/>
     <Stack.Screen name="call" component={Call}/>
     <Stack.Screen name="status" component={Status}/>
    </Stack.Navigator>
  );
}
export default Navigation