import {View ,Text,StyleSheet,Dimensions,Image} from "react-native"

import { Fontisto } from '@expo/vector-icons';
import React from "react";
const StatusCard = ()  => (
    <View style={styles.container}>
    <Image
         style={styles.img}
         source={{
           uri: 'https://images.unsplash.com/photo-1680992284454-74dcc2b29410?ixlib=rb-4.0.3&ixid=&auto=format&fit=crop&w=687&q=80',
         }}
       />
       <View style={styles.centerCardStyle}>
         <Text style={styles.heading}>Bruno </Text>
         <View style={styles.callDetails}>
         <Text>Today, 11:11AM</Text>
         </View>
       </View>
       <View style={styles.rightCardStyle}>
       {/* <Fontisto name="messenger" size={24} color="green" /> */}
       
       </View>
     </View>
  )


export default StatusCard

const styles = StyleSheet.create({
    container:{
        // marginHorizontal:"35%",
        marginVertical:10,
        flexDirection:"row",

    },
    img:{
        flex:1,
        width:Dimensions.get('screen').width/8,
        height:Dimensions.get('screen').height/17,
        borderRadius:100
    },
    centerCardStyle:{
        marginLeft:"1%",
        justifyContent:"center",
        flex:4,
        alignItems:"flex-start"
    },
    heading:{
        fontSize:18
    },
    rightCardStyle:{
        justifyContent:"center",
        flex:2,
        alignItems:"center"
    },
    callDetails:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})