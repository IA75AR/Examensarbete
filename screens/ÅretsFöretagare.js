import { StyleSheet, View, Text } from "react-native";

export default function ÅretsFöretagare () {

    //"ÅretsFöretagare"-screen
  
    return (
        <>
            <View style={styles.container}>
                <Text>ÅretsFöretagare</Text>
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