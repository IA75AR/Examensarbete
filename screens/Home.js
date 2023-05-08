import { StatusBar } from 'expo-status-bar';
import { View, Image, StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import KICKSTART from "../assets/KICKSTART.png";
import LoggaTHRosa from "../assets/LoggaTHVit.png";
import MenyScreen from './MenyScreen';
import Fitness from './Fitness';

export default function Home () {

    //"Home"-screen

    const navigation = useNavigation();

    const handleChangeScreenTH = () => {
        navigation.navigate("MenyScreen", { screen: {MenyScreen}})
    }

    const handleChangeScreenKI = () => {
        navigation.navigate("Fitness", { screen: {Fitness}})
    }
  
    return (
        <>
            <View style={styles.container}>
                <Pressable onPress={handleChangeScreenTH}>
                    <Image source={LoggaTHRosa} style={styles.imageTH}/>
                </Pressable>
                <Text>_____________________________________</Text>
                <Pressable onPress={handleChangeScreenKI}>
                    <Image source={KICKSTART} style={styles.imageKICKSTART}/>
                </Pressable>
                <Text style={styles.version}>Version: 10.0.20</Text>
                <StatusBar style="dark" />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ec008c",
        paddingTop: 150
    }, imageTH: {
        height: 150,
        width: 250
    }, imageKICKSTART: {
        height: 200,
        width: 350
    }, version: {
        marginTop: 100,
        fontFamily: "Avenir"
    }
});

