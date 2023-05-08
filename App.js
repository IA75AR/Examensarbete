import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import StackNavigation from "./navigations/StackNavigation";
import DansaMedOss from "./screens/DansaMedOss";
import Dansklasser from "./screens/Dansklasser";
import Fitness from "./screens/Fitness";
import Event from "./screens/Event";
import ÅretsFöretagare from "./screens/ÅretsFöretagare";


export default function App () {

  //Simple debugging - delete before production
  console.log("App executed");

  const BottomTab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
        <BottomTab.Navigator screenOptions={{
            tabBarShowLabel: true, 
            headerShown: false, 
            tabBarActiveTintColor: "#ec008c", 
            tabBarInactiveTintColor: "black",
            tabBarStyle: { position: 'absolute', paddingTop: 10},
            // Ikon rosa, "hover"
            }}>
          <BottomTab.Screen
              name="StackNavigation"
              component={StackNavigation}
              options={{
                tabBarLabel: "Home", 
                tabBarLabelPosition: "below-icon",
                tabBarIcon: () => <Entypo name="home" size={24}/>
              }}
          />
          <BottomTab.Screen
              name="DansaMedOss"
              component={DansaMedOss}
              options={{
                tabBarLabel: "Dansa med oss!", 
                tabBarLabelPosition:"below-icon", 
                tabBarIcon: () => <Entypo name="slideshare" size={24}/>
              }}
          />
          <BottomTab.Screen
              name="Dansklasser"
              component={Dansklasser}
              options={{
                tabBarLabel: "Dansklasser", 
                tabBarLabelPosition:"below-icon", 
                tabBarIcon: () => <AntDesign name="heart" size={24}/>
              }}
          />
          <BottomTab.Screen
              name="Fitness"
              component={Fitness}
              options={{
                tabBarLabel: "Fitness", 
                tabBarLabelPosition:"below-icon", 
                tabBarIcon: () => <MaterialIcons name="fitness-center" size={24}/>
              }}
          />
          <BottomTab.Screen
              name="Event"
              component={Event}
              options={{
                tabBarLabel: "Event", 
                tabBarLabelPosition:"below-icon", 
                tabBarIcon: () => <Entypo name="mic" size={24}/>
              }}
          />
          <BottomTab.Screen
              name="ÅretsFöretagare"
              component={ÅretsFöretagare}
              options={{
                tabBarLabel: "Årets Företagare", 
                tabBarLabelPosition:"below-icon", 
                tabBarIcon: () => <Entypo name="star" size={24}/>
              }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
      backgroundColor: "black",
  }
});
