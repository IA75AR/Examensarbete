import { StyleSheet, View, Text, Image, ScrollView, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Sagovärlden from "../assets/theHouse/Sagovärlden.png"
import Princess from "../assets/theHouse/Princess.png"
import THK from "../assets/theHouse/THK.png"
import LoggaTHVit from "../assets/theHouse/LoggaTHVit.png"
import Instagram from "../assets/theHouse/Instagram.png"
import Tiktok from "../assets/theHouse/Tiktok.png"

export default function DansaMedOss () {

    //"DansaMedOss"-screen

    const handlePressFB = () => {
        Linking.openURL("https://www.facebook.com/thehousedancestudio/")
    }

    const handlePressInsta = () => {
        Linking.openURL("https://www.instagram.com/thehousedancestudio/")
    }

    const handlePressLänkHemsidan = () => {
        Linking.openURL("https://www.thehousedancestudio.se/")
    }

    const handlePressTiktok = () => {
        Linking.openURL("https://www.tiktok.com/@thehousedancestudio")
    }
  
    return (
        <>
            <View style={styles.containerColumn}>
                <ScrollView>
                    <View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={Sagovärlden} style={styles.ImageDansklasser} />
                            </View>
                            <Text style={styles.text2}>En dansklass för de allra minsta. Välkommen in i en sagovärld där vi på ett lekfullt sätt drömmer oss bort bland musiken, dansen och alla sagoböckerna. MNRI är viktigt för oss, det genomsyrar alla våra dansklasser. Våra älskade barn, hos oss är tryggheten viktig. #duäraldrigensam</Text>
                            <Text style={styles.text1}>FAKTA</Text>
                            <Text style={styles.text2}>Nivå: Nybörjare</Text>
                            <Text style={styles.text2}>Ålder: 3 – 4 år</Text>
                        </View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={Princess} style={styles.ImageDansklasser} />
                            </View>
                            <Text style={styles.text2}>Älskar du att dansa och drömmer om att vara prinsessa för en dag? Välkommen till en dansklass där drömmar slår in, där du får glittra och skina som just DU kan!</Text>
                            <Text style={styles.text1}>FAKTA</Text>
                            <Text style={styles.text2}>Nivå: Nybörjare</Text>
                            <Text style={styles.text2}>Ålder: 3 – 6 år</Text>
                        </View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={THK} style={styles.ImageDansklasser} />
                            </View>
                            <Text style={styles.text2}>Välkommen till en klass där vi dansar loss till musiken och får testa på massor av olika stilar. En av våra absolut populäraste klasser!</Text>
                            <Text style={styles.text1}>FAKTA</Text>
                            <Text style={styles.text2}>Nivå: Nybörjare</Text>
                            <Text style={styles.text2}>Ålder: 5 – 7 år</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text1}>________________________________</Text>
                        <View>
                            <Text style={styles.text1}>Mer information på hemsida & följ oss gärna på:</Text>
                        </View>
                        <View style={styles.medier}>
                            <Pressable onPress={handlePressLänkHemsidan}>
                                <Image source={LoggaTHVit} style={styles.buttonTH}></Image>
                            </Pressable>
                            <Pressable onPress={handlePressInsta}>
                                <Image source={Instagram} style={styles.instagram}></Image>
                            </Pressable>
                            <FontAwesome.Button 
                                name="facebook-f" 
                                onPress={handlePressFB}
                            >
                            </FontAwesome.Button>
                            <Pressable onPress={handlePressTiktok}>
                                <Image source={Tiktok} style={styles.tiktok}></Image>
                            </Pressable>
                        </View>
                        <Text style={styles.text1}>Telefon: 0733-114 114 @The House</Text>
                        <View style={styles.containerColumn}>
                            <Image source={LoggaTHVit} style={styles.imageLoggaTHFooter} />
                            <Text style={styles.text2}>Copyright © The House Dance Studio & Events AB. All rights reserved.</Text>
                        </View>
                        <Text style={styles.text1}> ___________________________________</Text>
                    </View>
                 </ScrollView>
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
        backgroundColor: "black"
    }, text1: {
        fontFamily: "Avenir",
        fontSize: 18,
        backgroundColor: "black",
        color: "white",
        marginTop: 15,
        marginBottom: 20,
        marginLeft: 39,
        marginRight: 35
    }, text2: {
        fontFamily: "Avenir",
        fontSize: 14,
        backgroundColor: "black",
        color: "white",
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 35
    }, ImageDansklasser: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        marginTop: 30,
        marginBottom: 20,
        width: 310,
        height: 300
    }, medier: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 35,
        marginBottom: 20,
        maxWidth: 150
    }, imageLoggaTH: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 70,
        padding: 30,
        width: 300,
        height: 150
    }, imageLoggaTHFooter: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        width: 300,
        height: 150
    }, instagram: {
        marginRight: 20,
        width: 40,
        height: 40
    }, tiktok: {
        marginRight: 20,
        marginLeft: 16,
        width: 40,
        height: 40
    }, buttonTH: {
        marginBottom: 20,
        marginLeft: 7,
        marginRight: 20,
        marginTop: 20,
        width: 100,
        height: 40,
        borderRadius: 10
    }
});