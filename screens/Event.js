import { StyleSheet, View, ScrollView, Text, Image, Pressable, Linking } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import LoggaTHVit from "../assets/theHouse/LoggaTHVit.png";
import DavidLindgren from "../assets/theHouse/DavidLindgren.png"
import Sparbanksdagen from "../assets/theHouse/Sparbanksdagen.png"
import RubrikEvent from "../assets/theHouse/RubrikEvent.png"
import Instagram from "../assets/theHouse/Instagram.png"
import ListaEvent from "../components/ListaEvent";


export default function Event () {

    //"Event"-screen

    const handlePressFB = () => {
        Linking.openURL("https://www.facebook.com/thehousedancestudio/")
    }

    const handlePressInsta = () => {
        Linking.openURL("https://www.instagram.com/thehousedancestudio/")
    }

    const handlePressLänkHemsidan = () => {
        Linking.openURL("https://www.thehousedancestudio.se/")
    }
  
    return (
        <>
            <View style={styles.containerColumn}>
                <ScrollView>
                    <View style={styles.containerColumn}>
                        <View style={styles.imageDavidLindgren}>
                            <Image source={DavidLindgren} style={styles.imageDavidLindgren} accessibilityLabel="David Lindgren"/>
                        </View>
                        <View>
                            <Text style={styles.text1}>Efter lång erfarenhet av att driva och producera event i Sverige och utomlands ser The House nu fram emot att göra samma sak här i Västervik. Företagsfester, galor, modeshower, stadsfestivaler, idrottsevenemang, happenings och föreställningar är några av de projekt som vi varit inblandade i tidigare.</Text>
                        </View>
                        <View style={styles.containerColumn}>
                            <Image source={RubrikEvent} style={styles.imageAnmälDigHär}></Image>
                        </View>
                        <View>
                            <ListaEvent/>
                            <Text style={styles.text1}>Är ni intresserade av att veta mer eller skicka en förfrågan är ni välkomna att maila oss på info@thehousedancestudio.se</Text>
                        </View>
                        <View style={styles.containerColumn}>
                            <View style={styles.imageBlommor}>
                                <Image source={Sparbanksdagen} style={styles.imageBlommor} accessibilityLabel="Sparbanksdagen" />
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text1}>________________________________</Text>
                        <View>
                            <Text style={styles.text2}>Mer information och NYHETER finns på FB & instagram @kickstart.shakeit. Mer information om fitnesskonceptet KICKSTART! finns på:</Text>
                        </View>
                        <View style={styles.medier}>
                            <Pressable onPress={handlePressLänkHemsidan}>
                                <Image source={LoggaTHVit} style={styles.buttonTH} accessibilityLabel="Logga The House"></Image>
                            </Pressable>
                            <Pressable onPress={handlePressInsta}>
                                <Image source={Instagram} style={styles.instagram} accessibilityLabel="Instagram"></Image>
                            </Pressable>
                            <FontAwesome.Button 
                                name="facebook-f" 
                                onPress={handlePressFB}
                            >
                            </FontAwesome.Button>
                        </View>
                        <Text style={styles.text1}>Telefon: 0733-114 114 @The House</Text>
                        <View style={styles.containerColumn}>
                            <Image source={LoggaTHVit} style={styles.imageTHfooter} accessibilityLabel="Logga The House"/>
                            <Text style={styles.text2}>Copyright © The House Dance Studio & Events AB. All rights reserved.</Text>
                        </View>
                        <Text style={styles.text1}> ________________________________</Text>
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
    }, imageDavidLindgren: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 10,
        width: 300,
        height: 270,
        borderRadius: 10
    }, imageTHfooter: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 150
    }, instagram: {
        marginRight: 20,
        width: 40,
        height: 40
    }, imageBlommor: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 30,
        marginBottom: -10,
        width: 300,
        height: 420
    }, imageAnmälDigHär: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: 335,
        height: 60,
        borderRadius: 10,
        borderColor: "white",
        marginBottom: 30,
        marginTop: 30
    }, buttonTH: {
        marginBottom: 20,
        marginLeft: 7,
        marginRight: 20,
        marginTop: 20,
        paddingTop: 5,
        width: 100,
        height: 40,
        borderRadius: 10
    }, anmälDigHär: {
        fontFamily: "Avenir",
        fontSize: 20,
        backgroundColor: "white",
        color: "black",
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 40,
        marginRight: 35,
        padding: 15,
        borderRadius: 10
    }, text1: {
        fontFamily: "Avenir",
        fontSize: 18,
        backgroundColor: "black",
        color: "white",
        marginTop: 50,
        marginBottom: 30,
        marginLeft: 47,
        marginRight: 35
    }, text2: {
        fontFamily: "Avenir",
        backgroundColor: "black",
        color: "white",
        marginBottom: 40,
        marginLeft: 47,
        marginRight: 35,
        marginTop: 20 
    }, medier: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 35,
        marginBottom: 20,
        maxWidth: 150,
        borderRadius: 10
    }
});