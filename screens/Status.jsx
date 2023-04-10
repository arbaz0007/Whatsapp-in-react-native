import {View, Text} from "react-native"
import { FlatList } from "react-native-gesture-handler"
import StatusCard from "./StatusCard"

const Status = () =>{
    return <View style={{flex:1}}>
        <FlatList  data={[1,2,3,4,5,6,7,8,9,10,11,12]}
    renderItem={() => <StatusCard/>}
    />
    </View>
}
export default Status