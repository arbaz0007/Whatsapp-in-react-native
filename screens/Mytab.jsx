import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "./Home";
import Status from "./Status";
import Call from "./Call";
import Head from './Head';
const Tab = createMaterialTopTabNavigator();

const Mytab = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor: '#fff',
      tabBarLabelStyle: { fontSize: 12 },
      tabBarStyle: { backgroundColor: 'green' },
      headerShown:'false',
    }} >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Call" component={Call} />
    </Tab.Navigator>
  );
}
export default Mytab