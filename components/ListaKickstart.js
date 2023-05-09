import { View, FlatList, Text, StyleSheet } from "react-native";

export default function ListaKickstart () {

    return (
        <>
            <View>
                <View>
                    <FlatList
                        data={[
                        {key: "Härlig gruppträning!"},
                        {key: "Schlagerpuls, Shake & Drum, Buggaloo m fl"},
                        {key: "Effektiv styrka i gruppträning"},
                        {key: "PT-timma"},
                        {key: "Goodiebag"},
                        {key: "#VägraTråkigTräning"}
                        ]}
                        renderItem={({item}) => <Text style={styles.text1}>{`\u29BF ${item.key}`}</Text>}
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    text1: {
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