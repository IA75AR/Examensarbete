import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

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
        </stackNavigation.Navigator>
    </>
  );
};