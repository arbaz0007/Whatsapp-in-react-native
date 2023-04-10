import { View, Text,StyleSheet,Image,Dimensions, Pressable } from 'react-native'
import { EvilIcons,Entypo,MaterialIcons,Ionicons } from '@expo/vector-icons';


const CustumHead = () => {
  
  
  return (
     <View style={styles.header}>
      <View style={styles.leftHeader}>
        <Text>
        WhatsApp
      </Text>
    </View><View style={styles.rightHeader}>

        <EvilIcons name="camera" size={35} color="black" />
        <Entypo name="magnifying-glass" size={25} color="black" />
        <Entypo name="dots-three-vertical" size={20} color="black" />
      </View>

  </View>
  )
}

export default CustumHead

const styles = StyleSheet.create({
    header:{
        backgroundColor:"green",
        flexDirection:"row",
        justifyContent:"left",
      
        
      },
      leftHeader:{
        flex:3,
      },
      rightHeader:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",

      },
    
    leftSide:{
      
      flexDirection:"row",
      justifyContent:"flex-start",
      alignItems:"center"
    },
    

})