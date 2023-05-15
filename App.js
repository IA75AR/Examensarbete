import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
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
                <BottomTab.Navigator 
                    screenOptions={{
                    tabBarShowLabel: false, 
                    headerShown: false,
                    tabBarInactiveTintColor: styles.inactiveIcon.color, 
                    tabBarActiveTintColor: styles.activeIcon.color,
                    style: styles.bottomTab
                    }}
                >
                    <BottomTab.Screen
                        name="StackNavigation"
                        component={StackNavigation}
                        options={{
                            tabBarLabel: "Home", 
                            tabBarLabelPosition: "below-icon",
                            tabBarIcon: ({ focused }) => (
                                <Entypo 
                                    name="home"
                                    size={24} 
                                    style={focused ? styles.activeIcon : styles.inactiveIcon}
                                />
                            )
                        }}
                    />
                    <BottomTab.Screen
                        name="DansaMedOss"
                        component={DansaMedOss}
                        options={{
                            tabBarLabel: "DansaMedOss", 
                            tabBarLabelPosition: "below-icon",
                            tabBarIcon: ({ focused }) => (
                                <MaterialCommunityIcons 
                                    name="human-female-dance"
                                    size={28} 
                                    style={focused ? styles.activeIcon : styles.inactiveIcon}
                                />
                            )
                        }}
                    />
                    <BottomTab.Screen
                        name="Dansklasser"
                        component={Dansklasser}
                        options={{
                            tabBarLabel: "Dansklasser", 
                            tabBarLabelPosition: "below-icon",
                            tabBarIcon: ({ focused }) => (
                                <FontAwesome
                                    name="heart"
                                    size={24} 
                                    style={focused ? styles.activeIcon : styles.inactiveIcon}
                                />
                            )
                        }}
                    />
                    <BottomTab.Screen
                        name="Fitness"
                        component={Fitness}
                        options={{
                            tabBarLabel: "Fitness", 
                            tabBarLabelPosition: "below-icon",
                            tabBarIcon: ({ focused }) => (
                                <MaterialIcons
                                    name="fitness-center"
                                    size={24} 
                                    style={focused ? styles.activeIcon : styles.inactiveIcon}
                                />
                            )
                        }}
                    />
                    <BottomTab.Screen
                        name="Event"
                        component={Event}
                        options={{
                            tabBarLabel: "Event", 
                            tabBarLabelPosition: "below-icon",
                            tabBarIcon: ({ focused }) => (
                                <Entypo
                                    name="mic"
                                    size={24} 
                                    style={focused ? styles.activeIcon : styles.inactiveIcon}
                                />
                            )
                        }}
                    />
                </BottomTab.Navigator>
            </NavigationContainer>
        </>
    );
};

const styles = StyleSheet.create({
  bottomTab: {
    backgroundColor: "#fff"
  },
  inactiveIcon: {
    color: "black",
  },
  activeIcon: {
    color: "#ec008c",
  },
});
