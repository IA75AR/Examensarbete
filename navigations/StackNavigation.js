import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import DansaMedOss from "../screens/DansaMedOss";
import Dansklasser from "../screens/Dansklasser";
import Event from "../screens/Event";


export default function StackNavigation () {

  const stackNavigation = createNativeStackNavigator();

  return (
    <>
        <stackNavigation.Navigator>
            <stackNavigation.Screen
                options={{headerShown: false}}
                name="Home"
                component={Home}
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
                name="Event"
                component={Event}
            />
        </stackNavigation.Navigator>
    </>
  );
};