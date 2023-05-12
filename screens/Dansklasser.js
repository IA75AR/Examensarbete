import { StyleSheet, View, ScrollView, Text, Image, Pressable, Linking } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import LoggaTHVit from "../assets/theHouse/LoggaTHVit.png";
import Instagram from "../assets/theHouse/Instagram.png";
import Tiktok from "../assets/theHouse/Tiktok.png";
import Dansare1 from "../assets/theHouse/Dansare1.png"
import Dansare2 from "../assets/theHouse/Dansare2.png"
import LPGul from "../assets/theHouse/LPGul.png";
import LPRosa from "../assets/theHouse/LPRosa.png";
import LPMint from "../assets/theHouse/LPMint.png";
import LPOrange from "../assets/theHouse/LPOrange.png";
import KnappAnmälDigHär from "../assets/theHouse/KnappAnmälDigHär.png";
import RubrikDansklasser from "../assets/theHouse/RubrikDansklasser.png";
import Sagovärlden from "../assets/theHouse/Sagovärlden.png";
import Princess from "../assets/theHouse/Princess.png";
import THK from "../assets/theHouse/THK.png";
import Jazz79 from "../assets/theHouse/Jazz79.png";
import Streetdance79 from "../assets/theHouse/Streetdance79.png";
import Jazz1012 from "../assets/theHouse/Jazz1012.png";
import Streetdance1012 from "../assets/theHouse/Streetdance1012.png";
import TikTok1012 from "../assets/theHouse/TikTok1012.png";
import Streetdance1317 from "../assets/theHouse/Streetdance1317.png";
import FeminineVibe from "../assets/theHouse/FeminineVibe.png";
import SYTYCD1317 from "../assets/theHouse/SYTYCD1317.png";


export default function Dansklasser () {

    //"Dansklasser"-screen
  
    const handlePressFB = () => {
        Linking.openURL("https://www.facebook.com/thehousedancestudio/")
    }

    const handlePressInsta = () => {
        Linking.openURL("https://www.instagram.com/thehousedancestudio/")
    }

    const handlePressAnmälan = () => {
        Linking.openURL("https://www.thehousedancestudio.se/flv_portfolio/anmalan-dansklasser-vt23/")
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
                    <View style={styles.containerColumn}>
                        <Image source={LoggaTHVit} style={styles.imageLoggaTH} />
                    </View>
                    <View style={styles.imageLoggaTH}>
                            <Image source={Dansare1} style={styles.imageDansare1} />
                    </View>
                    <View style={styles.containerColumn}>
                        <Image source={RubrikDansklasser} style={styles.imageAnmälDigHär}></Image>
                    </View>
                    <View>
                        <Pressable
                            onPress={handlePressAnmälan}
                            style={styles.containerColumn}
                        >
                        <Image source={KnappAnmälDigHär} style={styles.imageAnmälDigHär}></Image>
                        </Pressable>
                    </View>
                    <View style={styles.containerColumn}>
                        <Image source={LPGul} style={styles.LP} />
                        <Image source={LPRosa} style={styles.LP} />
                        <View style={styles.containerColumn}>
                            <View style={styles.imageKICKSTART}>
                                <Image source={Dansare2} style={styles.imageDansare2} />
                            </View>
                        </View>
                        <Image source={LPOrange} style={styles.LP} />
                        <Image source={LPMint} style={styles.LP} />
                    </View>
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
                            <Text style={styles.text2}>En dansklass för de allra minsta. Välkommen in i en sagovärld där vi på ett lekfullt sätt drömmer oss bort bland musiken, dansen och alla sagoböckerna. MNRI är viktigt för oss, det genomsyrar alla våra dansklasser. Våra älskade barn, hos oss är tryggheten viktig. #duäraldrigensam</Text>
                            <Text style={styles.text1}>FAKTA</Text>
                            <Text style={styles.text2}>Nivå: Nybörjare</Text>
                            <Text style={styles.text2}>Ålder: 3 – 6 år</Text>
                        </View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={THK} style={styles.ImageDansklasser} />
                            </View>
                            <Text style={styles.text2}>Välkommen till en klass där vi dansar loss till musiken och får testa på massor av olika stilar.</Text>
                            <Text style={styles.text1}>FAKTA</Text>
                            <Text style={styles.text2}>Nivå: Nybörjare</Text>
                            <Text style={styles.text2}>Ålder: 5 – 7 år</Text>
                        </View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={Jazz79} style={styles.ImageDansklasser} />
                            </View>
                            <Text style={styles.text2}>En dansklass för de allra minsta. Välkommen in i en sagovärld där vi på ett lekfullt sätt drömmer oss bort bland musiken, dansen och alla sagoböckerna. MNRI är viktigt för oss, det genomsyrar alla våra dansklasser. Våra älskade barn, hos oss är tryggheten viktig. #duäraldrigensam</Text>
                            <Text style={styles.text1}>FAKTA</Text>
                            <Text style={styles.text2}>Nivå: Nybörjare</Text>
                            <Text style={styles.text2}>Ålder: 7 – 9 år</Text>
                        </View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={Streetdance79} style={styles.ImageDansklasser} />
                            </View>
                            <Text style={styles.text2}>En dansklass för de allra minsta. Välkommen in i en sagovärld där vi på ett lekfullt sätt drömmer oss bort bland musiken, dansen och alla sagoböckerna. MNRI är viktigt för oss, det genomsyrar alla våra dansklasser. Våra älskade barn, hos oss är tryggheten viktig. #duäraldrigensam</Text>
                            <Text style={styles.text1}>FAKTA</Text>
                            <Text style={styles.text2}>Nivå: Nybörjare</Text>
                            <Text style={styles.text2}>Ålder: 7 – 9 år</Text>
                        </View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={Jazz1012} style={styles.ImageDansklasser} />
                            </View>
                            <Text style={styles.text2}>En dansklass för de allra minsta. Välkommen in i en sagovärld där vi på ett lekfullt sätt drömmer oss bort bland musiken, dansen och alla sagoböckerna. MNRI är viktigt för oss, det genomsyrar alla våra dansklasser. Våra älskade barn, hos oss är tryggheten viktig. #duäraldrigensam</Text>
                            <Text style={styles.text1}>FAKTA</Text>
                            <Text style={styles.text2}>Nivå: Nybörjare</Text>
                            <Text style={styles.text2}>Ålder: 10 – 12 år</Text>
                        </View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={Streetdance1012} style={styles.ImageDansklasser} />
                            </View>
                            <Text style={styles.text2}>En dansklass för de allra minsta. Välkommen in i en sagovärld där vi på ett lekfullt sätt drömmer oss bort bland musiken, dansen och alla sagoböckerna. MNRI är viktigt för oss, det genomsyrar alla våra dansklasser. Våra älskade barn, hos oss är tryggheten viktig. #duäraldrigensam</Text>
                            <Text style={styles.text1}>FAKTA</Text>
                            <Text style={styles.text2}>Nivå: Nybörjare</Text>
                            <Text style={styles.text2}>Ålder: 10 – 12 år</Text>
                        </View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={TikTok1012} style={styles.ImageDansklasser} />
                            </View>
                            <Text style={styles.text2}>En dansklass för de allra minsta. Välkommen in i en sagovärld där vi på ett lekfullt sätt drömmer oss bort bland musiken, dansen och alla sagoböckerna. MNRI är viktigt för oss, det genomsyrar alla våra dansklasser. Våra älskade barn, hos oss är tryggheten viktig. #duäraldrigensam</Text>
                            <Text style={styles.text1}>FAKTA</Text>
                            <Text style={styles.text2}>Nivå: Nybörjare</Text>
                            <Text style={styles.text2}>Ålder: 10 – 12 år</Text>
                        </View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={Streetdance1317} style={styles.ImageDansklasser} />
                            </View>
                            <Text style={styles.text2}>En dansklass för de allra minsta. Välkommen in i en sagovärld där vi på ett lekfullt sätt drömmer oss bort bland musiken, dansen och alla sagoböckerna. MNRI är viktigt för oss, det genomsyrar alla våra dansklasser. Våra älskade barn, hos oss är tryggheten viktig. #duäraldrigensam</Text>
                            <Text style={styles.text1}>FAKTA</Text>
                            <Text style={styles.text2}>Nivå: Nybörjare</Text>
                            <Text style={styles.text2}>Ålder: 13 – 17+ år</Text>
                        </View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={FeminineVibe} style={styles.ImageDansklasser} />
                            </View>
                            <Text style={styles.text2}>En dansklass för de allra minsta. Välkommen in i en sagovärld där vi på ett lekfullt sätt drömmer oss bort bland musiken, dansen och alla sagoböckerna. MNRI är viktigt för oss, det genomsyrar alla våra dansklasser. Våra älskade barn, hos oss är tryggheten viktig. #duäraldrigensam</Text>
                            <Text style={styles.text1}>FAKTA</Text>
                            <Text style={styles.text2}>Nivå: Nybörjare</Text>
                            <Text style={styles.text2}>Ålder: 13 – 17+ år</Text>
                        </View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={SYTYCD1317} style={styles.ImageDansklasser} />
                            </View>
                            <Text style={styles.text2}>En dansklass för de allra minsta. Välkommen in i en sagovärld där vi på ett lekfullt sätt drömmer oss bort bland musiken, dansen och alla sagoböckerna. MNRI är viktigt för oss, det genomsyrar alla våra dansklasser. Våra älskade barn, hos oss är tryggheten viktig. #duäraldrigensam</Text>
                            <Text style={styles.text1}>FAKTA</Text>
                            <Text style={styles.text2}>Nivå: Fortsättning</Text>
                            <Text style={styles.text2}>Ålder: 13 – 17+ år</Text>
                        </View>
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
                            <Text style={styles.text2}>© The House Dance Studio & Events AB</Text>
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
    }, containerRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
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
    }, imageDansare: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 80,
        marginTop: -100,
        marginBottom: -20,
        width: 370
    }, imageDansare1: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 80,
        marginTop: -150,
        width: 270
    }, imageDansare2: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        width: 320,
        height: 220
    }, rubrik1: {
        fontFamily: "Avenir",
        fontSize: 30,
        backgroundColor: "black",
        color: "white",
        marginTop: -70,
        marginBottom: 120,
        marginLeft: 30,
        marginRight: 35
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
        marginBottom: 60,
        marginTop: -40
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
    }, text3: {
        fontFamily: "Avenir",
        backgroundColor: "black",
        color: "white",
        marginBottom: 20,
        marginLeft: 7,
        marginRight: 35,
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1
    }, medier: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 35,
        marginBottom: 20,
        maxWidth: 150
    }, LP: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20,
        width: 220,
        height: 200
    }, ImageDansklasser: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 20,
        width: 310,
        height: 300
    }
});