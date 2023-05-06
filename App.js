import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigation from "./navigations/StackNavigation";
import { Entypo } from '@expo/vector-icons';


export default function App () {

  //Simple debugging - delete before production
  console.log("App executed");

  const BottomTab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
        <BottomTab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
          <BottomTab.Screen
            name="StackNavigation"
            component={StackNavigation}
            options={{tabBarIcon: () => <Entypo name="home" size={24} color="black" />}} 
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
};
