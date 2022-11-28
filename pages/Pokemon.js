import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

export async function getPokeData(name) {
    try {
        let pokeData = {};
        var data = await fetch(`https://pokeapi.co/api/v2/pokemon/${global.pokemon}/`);
        data = await data.json();
        pokeData.id = data.id;
        pokeData.name = data.name;
        pokeData.types = data.types;
        pokeData.sprites = data.sprites.other.home.front_default;
        pokeData.weight = data.weight;
        pokeData.height = data.height;
        global.poke = pokeData;
        return pokeData;
    }
    catch(e) {}
}

export default function Pokemon({navigation}) {
    let firstLetter = global.pokemon.charAt(0)
    let firstLetterCap = firstLetter.toUpperCase()
    let remainingLetters = global.pokemon.slice(1)
    let pokeTitle = firstLetterCap + remainingLetters

    let tipo = `O tipo desse Pokémon é: ${global.poke.types[0].type.name}`
    let peso = `O peso desse Pokémon é: ${(global.poke.weight / 454).toFixed(3)} kg`
    let altura = `A altura desse Pokémon é: ${(global.poke.height / 30.48).toFixed(2)} metros`

    return (
    <View style={styles.container}>
      <Text style={styles.title}>{pokeTitle}</Text>
      <Image
        style={styles.pokeImg}
        source={{uri: global.poke.sprites}}
      />
      <Text style = {styles.dados}>{tipo}</Text>
      <Text style = {styles.dados}>{peso}</Text>
      <Text style = {styles.dados}>{altura}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '45%'
  },
  title: {
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: '30%'
  },
  pokeImg: {
    height: '50%',
    width: '60%',
    marginBottom: '15%'
  },
  dados: {
    fontWeight: 'bold',
    fontSize: 17,
  }
});