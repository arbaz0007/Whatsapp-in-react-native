import {Text, View,FlatList} from "react-native"
import Mytab from './Mytab';
import ChatCard from "./ChatCard";
import CustumHead from './CustumHead';
const Home = ({navigation}) =>{
   console.log(navigation);
    return<View style={{flex:1}}>
              <FlatList
    data={[1,2,3,4,5,6,7,8,9,10,11,12]}
    renderItem={() => <ChatCard/>}
    />
            
    </View>
}
export default Home