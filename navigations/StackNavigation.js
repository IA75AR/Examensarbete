import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import MenyScreen from "../screens/MenyScreen";
import DansaMedOss from "../screens/DansaMedOss";
import Dansklasser from "../screens/Dansklasser";
import Fitness from "../screens/Fitness";
import Event from "../screens/Event";
import ÅretsFöretagare from "../screens/AretsForetagare";


export default function StackNavigation () {

  const stackNavigation = createNativeStackNavigator();

  return (
    <>
        <stackNavigation.Navigator>
            <stackNavigation.Screen
                options={{headerShown: false, tabBarShowLabel: false}}
                name="Home"
                component={Home}
            />
            <stackNavigation.Screen
                options={{headerShown: false}}
                name="MenyScreen"
                component={MenyScreen}
            />
            <stackNavigation.Screen
                options={{headerShown: false}}
                name="DansaMedOss"
                component={DansaMedOss}
            />
            <stackNavigation.Screen
                options={{headerShown: false}}
                name="Dansklasser"
                component={Dansklasser}
            />
            <stackNavigation.Screen
                options={{headerShown: false}}
                name="Fitness"
                component={Fitness}
            />
            <stackNavigation.Screen
                options={{headerShown: false}}
                name="Event"
                component={Event}
            />
            <stackNavigation.Screen
                options={{headerShown: false}}
                name="ÅretsFöretagare"
                component={ÅretsFöretagare}
            />
        </stackNavigation.Navigator>
    </>
  );
};