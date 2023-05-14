import { View, SectionList, Text, StyleSheet } from "react-native";

export default function ListaKickstart () {

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text1}>🔘   Härlig gruppträning!</Text> 
                <Text style={styles.text1}>🔘   Schlagerpuls, Shake & Drum, Buggaloo m fl</Text> 
                <Text style={styles.text1}>🔘   Effektiv styrka i gruppträning</Text> 
                <Text style={styles.text1}>🔘   PT-timma</Text> 
                <Text style={styles.text1}>🔘   Goodiebag</Text> 
                <Text style={styles.text1}>🔘   #VägraTråkigTräning"</Text> 
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    text1: {
        fontFamily: "Avenir",
        backgroundColor: "black",
        color: "white",
        marginBottom: 10,
        marginLeft: 40,
        marginRight: 35
    }, rubrik1: {
        fontFamily: "Avenir",
        fontSize: 20,
        backgroundColor: "black",
        color: "white",
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 35,
        padding: 10,
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1,
    },
});