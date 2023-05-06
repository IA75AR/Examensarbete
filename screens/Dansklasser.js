import { StyleSheet, View, Text } from "react-native";

export default function Dansklasser () {

    //"Dansklasser"-screen
  
    return (
        <>
            <View style={styles.container}>
                <Text>Dansklasser</Text>
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
    }
});