import { StyleSheet, View, ScrollView, Text, Image, Pressable, Linking } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import KICKSTARTVit from "../assets/KICKSTART/KICKSTARTVit.png";
import KICKSTART from "../assets/KICKSTART/KICKSTART.png";
import Team1 from "../assets/KICKSTART/Team1.png";
import VTT from "../assets/KICKSTART/VTT.png"
import Nominering from "../assets/theHouse/Nominering.png"
import PeopleTräning from "../assets/KICKSTART/PeopleTräning.png"
import LPVit from "../assets/KICKSTART/LPVit.png";
import Schlagerpuls from "../assets/KICKSTART/Schlagerpuls.png"
import ShakeAndDrum from "../assets/KICKSTART/ShakeAndDrum.png"
import Disco from "../assets/KICKSTART/Disco.png"
import Buggaloo from "../assets/KICKSTART/Buggaloo.png"
import HipHop from "../assets/KICKSTART/HipHop.png"
import Instagram from "../assets/theHouse/Instagram.png"
import KnappAnmälDigHär from "../assets/theHouse/KnappAnmälDigHär.png"
import ListaKickstart from "../components/ListaKickstart";


export default function Fitness () {

    //"Fitness"-screen

    const handlePressFB = () => {
        Linking.openURL("https://www.facebook.com/kickstart.shakeit/")
    }

    const handlePressInsta = () => {
        Linking.openURL("https://www.instagram.com/kickstart.shakeit/")
    }

    const handlePressAnmälan = () => {
        Linking.openURL("http://thehousedancestudio.se/flv_portfolio/anmal-kickstart-vt-23/")
    }

    const handlePressLänkHemsidan = () => {
        Linking.openURL("https://www.thehousedancestudio.se/kickstart/")
    }

  
    return (
        <>
            <View style={styles.containerColumn}>
                <ScrollView>
                    <View style={styles.containerColumn}>
                        <Image source={KICKSTARTVit} style={styles.imageKICKSTART} />
                        <View style={styles.imageKICKSTART}>
                            <Image source={Team1} style={styles.imageTeam1} accessibilityLabel="Team 1"/>
                        </View>
                        <View>
                            <Text style={styles.text1}>Behöver du en rejäl NYSTART & KICK vad gäller både din mentala som fysiska träning och hälsa? Hösten 2020 startade vi fitnesskoncepetet KICKSTART! Det blev succé med fulla team!</Text>
                        </View>
                    </View>
                    <View style={styles.containerColumn}>
                        <View style={styles.imageKICKSTART}>
                            <Image source={VTT} style={styles.imageAlltFörHälsan} accessibilityLabel="Träningspass"/>
                        </View>
                    </View>
                    <ListaKickstart/>
                    <View>
                        <Pressable
                            onPress={handlePressAnmälan}
                            style={styles.containerColumn}
                        >
                        <Image source={KnappAnmälDigHär} style={styles.imageAnmälDigHär}></Image>
                        </Pressable>
                    </View>
                    <View style={styles.containerColumn}>
                        <View style={styles.imageKICKSTART}>
                            <Image source={Nominering} style={styles.imageNominering} accessibilityLabel="Nominering"/>
                        </View>
                    </View>
                    <View style={styles.containerColumn}>
                        <Image source={LPVit} style={styles.LP} />
                        <Image source={LPVit} style={styles.LP} />
                        <Image source={LPVit} style={styles.LP} />
                        <Image source={LPVit} style={styles.LP} />
                    </View>
                    <View style={styles.containerColumn}>
                        <View style={styles.imageKICKSTART}>
                            <Image source={PeopleTräning} style={styles.imageAlltFörHälsan} accessibilityLabel="Person som tränar" />
                        </View>
                    </View>
                    <View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={Schlagerpuls} style={styles.LPPassbeskrivning} />
                            </View>
                            <Text style={styles.text1}>En kavalkad av Melodifestivalens härliga låtar – allt i ett och samma pass!</Text>
                            <Text style={styles.text2}>Här finns egentligen bara ett ord för att förklara det här passet... DANSGLÄDJE! Det här passet proppar vi fullt med massor med sköna schlagerlåtar, nya som gamla godingar! Vill du svänga runt och träna till sköna schlagerlåtar? Vara Carola för en dag? Träna upp dina muskler och samtidigt göra det på ett otroligt roligt sätt? Då har du hittat helt rätt! Med låtar som bland annat Fångad av en stormvind, Bra vibrationer och Blame it on the disco hittar vi den rätta stämningen på passet. Det här är party rakt igenom! Välkommen in i Mello-febern!!</Text>
                            <Text style={styles.text1}>Fokus: Kondition</Text>
                        </View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={ShakeAndDrum} style={styles.LPPassbeskrivning} />
                            </View>
                            <Text style={styles.text1}>Trumpinnar, eufori och ett ruskigt tempo, nu kör vi!</Text>
                            <Text style={styles.text2}>Ett av The House populäraste pass har blivit Shake & Drum för dess unika tempo och fighting spirit. Vi trummar med pinnarna genom hela passet och tränar till sköna och maffiga rytmer. Armar och överkropp utmanas hela tiden på ett unikt och roligt sätt. Pulsen höjs och detta pass är både konditionskrävande och utmanande. Det här är killarnas favoritpass! Välkomna till ett pass fullt med riktigt hård och KUL träning!</Text>
                            <Text style={styles.text1}>Fokus: Kondition & Styrka överkropp</Text>
                        </View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={Disco} style={styles.LPPassbeskrivning} />
                            </View>
                            <Text style={styles.text1}>Disco inferno, Staying Alive och John Travolta pumpar i högtalarna, discokulan snurrar för fullt!</Text>
                            <Text style={styles.text2}>På det här fitnesspasset tar vi oss tillbaka till 70-talets discofeber bland glittrande discokulor och musik som vi alla minns. Vi diggar loss, låter svetten glittra och pulsen öka till detta endorfinpumpande fitnesspass. Vi säger bara... Let's Disco!!</Text>
                            <Text style={styles.text1}>Fokus: Feelgood</Text>
                        </View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={Buggaloo} style={styles.LPPassbeskrivning} />
                            </View>
                            <Text style={styles.text1}>För första gången i Sverige - Bugga utan partner till underbar buggmusik!</Text>
                            <Text style={styles.text2}>Vill du bugga, men ha chansen att göra det utan partner? Grattis, då har du hittat helt rätt! För första gången i Sverige lanseras detta fitnesspass. Här tränar du till underbar buggmusik, gör roliga stegkombinationer samtidigt som du svettas och gör av med mängder med kalorier. Kondition är ett av nyckelorden i Buggaloo. På fitnesspasset Buggaloo lär vi ut steg och koreografier som även kan användas när man dansar bugg som par.</Text>
                            <Text style={styles.text1}>Fokus: Kondition</Text>
                        </View>
                        <View>
                            <View style={styles.containerColumn}>
                                <Image source={HipHop} style={styles.LPPassbeskrivningHipHop} />
                            </View>
                            <Text style={styles.text1}>Ett grymt fitnesspass för ben, rumpa och lår!</Text>
                            <Text style={styles.text2}>Fitnesspasset Hip-Hop Fitness fokuserar på att bygga en stark kropp till skön Hip-Hop-musik. Stilen är något lugnare än The House andra fitnesspass, men fortfarande ett pass där pulsen ökar och musklerna jobbar maximalt. Här jobbar vi lågt nere och maxar musklerna, framför allt i ben, rumpa och lår. Johan Carlsson är över 50 år, flerbarnsfarsa och älskar Hip-Hop Fitness! Det är aldrig försent att röra sig till sköna rytmer, och det är framför allt aldrig försent att ha roligt! Så nu kör vi... YO-YO!</Text>
                            <Text style={styles.text1}>Fokus: Styrka rumpa & lår</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text1}>________________________________</Text>
                        <View>
                            <Text style={styles.text2}>Mer information och NYHETER finns på FB & instagram @kickstart.shakeit. Mer information om fitnesskonceptet KICKSTART! finns på:</Text>
                        </View>
                        <View style={styles.medier}>
                            <Pressable onPress={handlePressLänkHemsidan}>
                                <Image source={KICKSTART} style={styles.buttonKickstart} accessibilityLabel="Logga KICKSTART!"></Image>
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
                            <Image source={KICKSTARTVit} style={styles.imageKICKSTARTFooter} accessibilityLabel="Logga KICKSTART!" />
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
    }, containerRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    }, imageKICKSTART: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 30,
        width: 300,
        height: 150
    }, imageKICKSTARTFooter: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 150
    }, instagram: {
        marginRight: 20,
        width: 40,
        height: 40
    }, imageTeam1: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: -70,
        marginBottom: 20,
        width: 300
    }, imageAlltFörHälsan: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: -50,
        width: 317,
        height: 220
    }, imageNominering: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: -150,
        width: 317,
        height: 220
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
        marginBottom: 160,
        marginTop: 30
    }, buttonKickstart: {
        backgroundColor: "white",
        color: "black",
        marginBottom: 20,
        marginLeft: 7,
        marginRight: 20,
        marginTop: 20,
        paddingTop: 5,
        width: 100,
        height: 40,
        borderRadius: 10
    }, rubrik1: {
        fontFamily: "Avenir",
        fontSize: 20,
        backgroundColor: "black",
        color: "white",
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 40,
        marginRight: 35,
        padding: 10,
        borderRadius: 10,
        borderColor: "white",
        borderWidth: 1
    }, rubrik2: {
        fontFamily: "Avenir",
        fontSize: 20,
        backgroundColor: "black",
        color: "white",
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 35,
        padding: 10,
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
        marginBottom: 30,
        marginLeft: 39,
        marginRight: 35
    }, text2: {
        fontFamily: "Avenir",
        backgroundColor: "black",
        color: "white",
        marginBottom: 40,
        marginLeft: 40,
        marginRight: 35,
        marginTop: 20 
    }, text3: {
        fontFamily: "Avenir",
        backgroundColor: "white",
        color: "black",
        marginBottom: 20,
        marginLeft: 7,
        marginRight: 20,
        marginTop: 20,
        padding: 11,
        borderRadius: 10
    }, medier: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 35,
        marginBottom: 20,
        maxWidth: 150,
        borderRadius: 10
    }, LP: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 20,
        width: 220,
        height: 200
    }, LPPassbeskrivning: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 40,
        width: 210,
        height: 215
    }, LPPassbeskrivningHipHop: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 40,
        width: 220,
        height: 215
    }
});