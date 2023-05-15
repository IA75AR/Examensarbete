import { StyleSheet, View, Pressable, Image } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import DansaMedOss from "../screens/DansaMedOss";
import Dansklasser from "../screens/Dansklasser";
import Fitness from "../screens/Fitness";
import Event from "../screens/Event";
import AretsForetagare from "../screens/AretsForetagare";
import KnappDansaMedOss from "../assets/theHouse/KnappDansaMedOss.png"
import KnappDansklasser from "../assets/theHouse/KnappDansklasser.png"
import KnappFitness from "../assets/theHouse/KnappFitness.png"
import KnappEvent from "../assets/theHouse/KnappEvent.png"
import KnappÅretsFöretagare from "../assets/theHouse/KnappÅretsFöretagare.png"
import KnappGoBack from "../assets/theHouse/KnappGoBack.png"


export default function MenyButtons () {

    //"MenyScreen"-screen

    const navigation = useNavigation();

    const handlePressDansaMedOss = () => {
        navigation.navigate("DansaMedOss", { screen: {DansaMedOss}})
    }

    const handlePressDansklasser = () => {
        navigation.navigate("Dansklasser", { screen: {Dansklasser}})
    }

    const handlePressFitness = () => {
        navigation.navigate("Fitness", { screen: {Fitness}})
    }

    const handlePressEvent = () => {
        navigation.navigate("Event", { screen: {Event}})
    }

    const handlePressÅretsFöretagare = () => {
        navigation.navigate("AretsForetagare", { screen: {AretsForetagare}})
    }

    const handlePressGoBack = () => {
        navigation.dispatch(CommonActions.goBack());
    }
  
    return (
        <>
            <View style={styles.containerColumn2}>
                <View style={styles.containerColumn}>
                    <Pressable onPress={handlePressDansaMedOss}>
                        <Image source={KnappDansaMedOss} style={styles.buttonMeny}></Image>
                    </Pressable>
                    <Pressable onPress={handlePressDansklasser}>
                        <Image source={KnappDansklasser} style={styles.buttonMeny}></Image>
                    </Pressable>
                    <Pressable onPress={handlePressFitness}>
                        <Image source={KnappFitness} style={styles.buttonMeny}></Image>
                    </Pressable>
                    <Pressable onPress={handlePressEvent}>
                        <Image source={KnappEvent} style={styles.buttonMeny}></Image>
                    </Pressable>
                    <Pressable onPress={handlePressÅretsFöretagare}>
                        <Image source={KnappÅretsFöretagare} style={styles.buttonMeny}></Image>
                    </Pressable>
                </View>
                <Pressable
                    onPress={handlePressGoBack}
                >
                    <Image source={KnappGoBack} style={styles.imageGoBack}></Image>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    containerColumn: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ec008c",
    }, containerColumn2: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ec008c",
        marginBottom: -30,
    }, buttonMeny: {
        width: 250,
        height: 80,
        borderRadius: 10,
        marginBottom: 30
    }, imageGoBack: {
        width: 100,
        height: 40,
        borderRadius: 10,
        marginTop: -100,
        marginBottom: 90
    }
});