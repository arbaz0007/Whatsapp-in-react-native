import {StyleSheet,View, StatusBar} from 'react-native'
import Mytab from './Mytab';
import CustumHead from './CustumHead';
const  Head = ({navigation})=> {
  return (
    <View style={styles.tabContainer}>
      <CustumHead headerShown={false} navigation={navigation} />
    <Mytab />
    </View>
  );
}

export default Head

const styles = StyleSheet.create({
  tabContainer:{
    flex:1,
    borderColor:"black",
    fontWeight: 'bold'
  }

})