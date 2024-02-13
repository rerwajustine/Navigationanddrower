import { NavigationAction, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab =createBottomTabNavigator()
export default function App(){
    return(
        <NavigationContainer>
           <Tab.Navigator>
            <Tab.Screen name="Home List" component={HomeListScreen}/>
            <Tab.Screen name="Calculator" component={CalculatorScreen}/>
            <Tab.Screen name="Contact" component={ContactScreen}/>
           </Tab.Navigator>
        </NavigationContainer>
    )
}
