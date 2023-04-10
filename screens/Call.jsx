import {View, Text, FlatList,Pressable} from "react-native"
import CallCard from "./CallCard"
import { FloatingAction } from "react-native-floating-action";
import React from 'react'

const Call = () =>{
  const actions = [
    {
      text: "Accessibility",
      name: "bt_accessibility",
      position: 2
    },
    {
      text: "Language",
      name: "bt_language",
      position: 1
    },
    {
      text: "Location",
      name: "bt_room",
      position: 3
    },
    {
      text: "Video",
      name: "bt_videocam",
      position: 4
    }
  ];
    return <View>
       <FlatList
    data={[1,2,3,4,5,6,7,8,9,10,11,12]}
    renderItem={() => <CallCard/>}
    />
     <FloatingAction
    actions={actions}
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
  />
  
</View>

  
}
export default Call