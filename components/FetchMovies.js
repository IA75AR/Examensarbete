import { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Movies from '../models/Movies';

export default function FetchMovies () {

  const url = "http://www.omdbapi.com/?t=High+School+Musical&apikey=804b3e14";
  const [movies, setMovies] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, []);

  return (
      <View style={styles.containerColumn}>
        <Text style={styles.text1}>{movies.Title}</Text>
        <Text style={styles.text1}>DANSSTIL:</Text>
        <Text style={styles.text1}>{movies.Plot}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  containerColumn: {
      flex: 1,
      flexDirection: "column",
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
  }
});