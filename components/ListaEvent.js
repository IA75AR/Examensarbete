import { View, SectionList, Text, StyleSheet } from "react-native";

export default function ListaEvent () {

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text1}>🔘   Tjustgalan – Koreograf, Västervik</Text> 
                <Text style={styles.text1}>🔘   Sparbanksdagen 2019 – Hanna & Liamoo</Text> 
                <Text style={styles.text1}>🔘   Slottsholmen/Björn Ulvaeus</Text> 
                <Text style={styles.text1}>🔘   Sparbanksdagen 2018 – Lisa Ajax</Text> 
                <Text style={styles.text1}>🔘   Sparbanksdagen 2017 – FO & O</Text> 
                <Text style={styles.text1}>🔘   Sparbanksdagen 2016 – Danny Saucedo</Text> 
                <Text style={styles.text1}>🔘   Sparbanksdagen 2015 – Molly Sandén</Text> 
                <Text style={styles.text1}>🔘   Babblarna 2018</Text> 
                <Text style={styles.text1}>🔘   Oxygen Marketing/GCC:s största mässa</Text> 
                <Text style={styles.text1}>🔘   Who’s in The House? Dansföreställning</Text> 
                <Text style={styles.text1}>🔘   Schibsted Sales Awards 2013</Text> 
                <Text style={styles.text1}>🔘   Different Show, Företagsevent Ikano Bank</Text> 
                <Text style={styles.text1}>🔘   HC Andersen, Företagsevent J & J</Text> 
                <Text style={styles.text1}>🔘   Stockholm Modecenter</Text> 
                <Text style={styles.text1}>🔘   R.I.O.T, Krogshow</Text> 
                <Text style={styles.text1}>🔘   Skärgårdsfestivalen</Text> 
                <Text style={styles.text1}>🔘   Galet Gott (matmässa)</Text> 
                <Text style={styles.text1}>🔘   Sony Ericsson Championships</Text> 
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    }, text1: {
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