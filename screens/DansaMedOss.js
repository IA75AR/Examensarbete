import { StyleSheet, View, Text, Image, ScrollView, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import RubrikDansaMedOss from "../assets/theHouse/RubrikDansaMedOss.png"
import DansaMedOssBecca2 from "../assets/theHouse/DansaMedOssBecca2.png"
import LoggaTHVit from "../assets/theHouse/LoggaTHVit.png"
import Instagram from "../assets/theHouse/Instagram.png"
import Tiktok from "../assets/theHouse/Tiktok.png"
import FetchMovies from "../components/FetchMovies";

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
                         <View style={styles.containerColumn}>
                            <Image source={RubrikDansaMedOss} style={styles.rubrikDansaMedOss}></Image>
                        </View>
                        <View style={styles.containerColumn}>
                            <Image source={DansaMedOssBecca2} style={styles.movieDansaMedOss} accessibilityLabel="Person som dansar" />
                        </View>
                        <View>
                            <FetchMovies/>
                        </View>
                    </View>
                    <View style={styles.containerColumn}>
                        <Text style={styles.text1}>__________________________________</Text>
                        <View>
                            <Text style={styles.text1}>Mer information på hemsida & följ oss gärna på:</Text>
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
                            <Pressable onPress={handlePressTiktok}>
                                <Image source={Tiktok} style={styles.tiktok} accessibilityLabel="TikTok"></Image>
                            </Pressable>
                        </View>
                        <Text style={styles.text1}>Telefon: 0733-114 114 @The House</Text>
                        <View style={styles.containerColumn}>
                            <Image source={LoggaTHVit} style={styles.imageLoggaTHFooter} accessibilityLabel="Logga The House" />
                        </View>
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
        backgroundColor: "black",
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
    }, movieDansaMedOss: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        marginTop: 30,
        marginBottom: 20,
        width: 330,
        height: 300,
        borderRadius: 10
    }, rubrikDansaMedOss: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        width: 335,
        height: 60,
        borderRadius: 10,
        borderColor: "white",
        marginTop: 100
    }, medier: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
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