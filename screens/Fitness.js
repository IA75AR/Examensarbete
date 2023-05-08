import { StyleSheet, View, Text, Image } from "react-native";
import KICKSTART from "../assets/KICKSTART.png"
import Team1 from "../assets/Team1.png"

export default function Fitness () {

    //"Fitness"-screen
  
    return (
        <>
            <View style={styles.container}>
                <Image source={KICKSTART} style={styles.imageKICKSTART} />
                <Image source={Team1} style={styles.imageTeam1} />
            </View>
            <View style={styles.text}>
                <Text style={styles.text}>Behöver du en rejäl NYSTART vad gäller både din mentala som fysiska träning och hälsa? Hösten 2020 startade vi fitnesskoncepetet KICKSTART! Det blev succé med fulla team!</Text>
                <Text style={styles.text}>Mer information och NYHETER finns på Instagram & FB @kickstart.shakeit</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        maxHeight: 450
    }, imageKICKSTART: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 400,
        marginTop: 50
    }, imageTeam1: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginLeft: 45,
        width: 300,
        height: 100
    }, text: {
        fontFamily: "Avenir",
        backgroundColor: "#fff",
        paddingLeft: 35,
        paddingRight: 30,
        paddingTop: 20 
    }
});

