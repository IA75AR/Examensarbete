import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Pressable, Animated, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import KICKSTART from "../assets/KICKSTART/KICKSTART.png";
import LoggaTHRosa from "../assets/theHouse/LoggaTHVit.png";
import MenyScreen from './MenyScreen';
import Fitness from './Fitness';
import { useRef, useEffect } from 'react';

export default function Home () {

    //"Home"-screen

    const navigation = useNavigation();
    const animation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animation, {
                    toValue: 1,
                    duration: 1600,
                    useNativeDriver: true,
                }),
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 1600,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, [animation]);


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
                    <Animated.Image source={LoggaTHRosa} style={[styles.imageTH, { opacity: animation}]}/>
                </Pressable>
                <Text style={styles.text1}>__________________________________</Text>
                <Pressable onPress={handleChangeScreenKI}>
                    <Animated.Image source={KICKSTART} style={[styles.imageKICKSTART, { opacity: animation}]}/>
                </Pressable>
                <Text style={styles.version}>Version: 10.0.20</Text>
                <StatusBar style="dark" />
            </View>
        </>
    );
};

const { width, height } = Dimensions.get("window");

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
        marginTop: width < 400 ? 70 : 160,
        marginBottom: width < 400 ? -20 : -120,
        fontFamily: "Avenir"
    }, 
});

