import { StatusBar } from 'expo-status-bar';
import { View, Image, StyleSheet, Text } from 'react-native';
import KICKSTART from "../assets/KICKSTART.png"
import LoggaTHRosa from "../assets/LoggaTHVit.png"

export default function Home () {

    //Home-screen
  
    return (
        <>
            <View style={styles.container}>
                <Image source={LoggaTHRosa} style={styles.imageTH} />
                <Text>_____________________________________</Text>
                <Image source={KICKSTART} style={styles.imageKICKSTART} />
                <StatusBar style="dark" />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ec008c",
        paddingTop: 50
    }, imageTH: {
        height: 150,
        width: 250
    }, imageKICKSTART: {
        height: 200,
        width: 350
    }
});

