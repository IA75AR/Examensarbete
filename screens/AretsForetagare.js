import { StyleSheet, View, ScrollView, Text, Image, Pressable, Linking } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import LoggaTHVit from "../assets/theHouse/LoggaTHVit.png";
import AretsForetagare from "../assets/theHouse/AretsForetagare.png"
import Blommor from "../assets/theHouse/Blommor.png"
import IngelaMarie from "../assets/theHouse/IngelaMarie.png"
import Tjustgalan from "../assets/theHouse/Tjustgalan.png"
import Instagram from "../assets/theHouse/Instagram.png"

export default function ÅretsFöretagare () {

    //"ÅretsFöretagare"-screen
  
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
                        <View style={styles.imageÅretsFöretagare}>
                            <Image source={AretsForetagare} style={styles.imageÅretsFöretagare} />
                        </View>
                        <View>
                            <Text style={styles.text1}>År 2018 blev Ingela Arrbrant, grundaren av The House Dance Studio & Events AB, på Tjustgalan utnämnd till Årets Företagare med följande motivering:</Text>
                            <Text style={styles.text2}>”Sedan i ung ålder visat sitt engagemang i dans och träning. Äger och driver nu The House med verksamhet på flera ben. Tar ett samhällsansvar genom sitt arbete med att tillfredsställa människors välbefinnande genom dans som träning. Detta görs bl a genom ett fullt utvecklat eget koncept som används över hela landet med den lokala förankringen i Västervik samt genom gedigen erfarenhet av event både nationellt och internationellt."</Text>                        
                        </View>
                    </View>
                    <View style={styles.containerColumn}>
                        <View style={styles.imageBlommor}>
                            <Image source={Blommor} style={styles.imageBlommor} />
                        </View>
                        <View style={styles.imageÅretsFöretagare}>
                            <Image source={IngelaMarie} style={styles.imageBlommor} />
                        </View>
                        <View style={styles.imageBlommor}>
                            <Image source={Tjustgalan} style={styles.imageBlommor} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text1}>________________________________</Text>
                        <View>
                            <Text style={styles.text2}>Mer information och NYHETER finns på FB & instagram @kickstart.shakeit. Mer information om fitnesskonceptet KICKSTART! finns på:</Text>
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
                        </View>
                        <Text style={styles.text1}>Telefon: 0733-114 114 @The House</Text>
                        <View style={styles.containerColumn}>
                            <Image source={LoggaTHVit} style={styles.imageTHfooter} />
                            <Text style={styles.text2}>Copyright © The House Dance Studio & Events AB. All rights reserved.</Text>
                        </View>
                        <Text style={styles.text1}> _________________________________</Text>
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
    }, imageÅretsFöretagare: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 10,
        width: 300,
        height: 250,
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