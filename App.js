import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "@expo/vector-icons"
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import StackNavigation from "./navigations/StackNavigation";
import DansaMedOss from "./screens/DansaMedOss";
import Dansklasser from "./screens/Dansklasser";
import Fitness from "./screens/Fitness";
import Event from "./screens/Event";


export default function App () {

  //Simple debugging - delete before production
  console.log("App executed");

  const BottomTab = createBottomTabNavigator();

  return (
    <>
      <NavigationContainer>
        <BottomTab.Navigator screenOptions={{
            tabBarShowLabel: false, 
            headerShown: false,
            tabBarActiveTintColor: "#ec008c", 
            tabBarInactiveTintColor: "black",
            tabBarStyle: { position: 'absolute', paddingTop: 10},
            // Ikon rosa, "hover", ta bort bottomtab Home
            }}>
          <BottomTab.Screen
              name="StackNavigation"
              component={StackNavigation}
              options={{
                tabBarLabel: "Home", 
                tabBarLabelPosition: "below-icon",
                navigationOptions: () => {
                  return {
                    tabBarIcon: ({ tintColor }) => {
                      let soureImage;
                      if (tintColor == "#ec008c") {
                        soureImage = "Home"
                      } else {
                        soureImage = "HomeActive"
                      }
                      return <Image name={soureImage} size={24} color={tintColor}/>
                    }
                  }
                }
              }}
          />
          <BottomTab.Screen
              name="DansaMedOss"
              component={DansaMedOss}
              options={{
                tabBarLabel: "Dansa med oss!", 
                tabBarLabelPosition:"below-icon", 
                tabBarIcon: () => <MaterialCommunityIcons name="human-female-dance" size={28} />
              }}
          />
          <BottomTab.Screen
              name="Dansklasser"
              component={Dansklasser}
              options={{
                tabBarLabel: "Dansklasser", 
                tabBarLabelPosition:"below-icon", 
                tabBarIcon: () => <FontAwesome name="heart" size={24} />
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
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
};