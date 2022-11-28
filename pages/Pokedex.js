import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from "react";
import { getPokeData } from './Pokemon';

export default function Pokedex({navigation}) {

  const [text, setText] = useState("");

  return (
  <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.kview}
  >
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
        <View style={styles.searchContainer}>
        <TextInput
            style={styles.inputStyle}
            autoCorrect={true}
            placeholderTextColor={"#000"}
            placeholder="Digite aqui seu Pokémon!"
            value={text}
            onChangeText={(value) => setText(value)}
            />
        </View>
        <TouchableOpacity
          style={styles.searchPokemon}
          onPress={async () => {  global.pokemon = text.toLowerCase(); await getPokeData(global.pokemon).then(setText("")).catch(); navigation.navigate("Pokémon")}}
          underlayColor='#fff'>
          <Text style={styles.searchText}>PESQUISAR POKEMON</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  kview: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#A31D42',
    borderRadius: 12,
    borderWidth: 2.6,
    borderBottomWidth: 2.6,
    alignItems: 'center',
    height: '4%',
    width: '87%',
    marginVertical: '6%',
    justifyContent: 'center'
  },
  searchPokemon:{
    marginRight:40,
    marginLeft:40,
    marginTop:5,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#f00',
    borderTopStartRadius:0,
    borderTopEndRadius:20,
    borderBottomStartRadius:20,
    borderBottomEndRadius:0,
    borderWidth: 1,
    borderColor: '#fff',
    width: '75%',//300,
    height: '10%',//70,
    justifyContent: 'center',
  },
  searchText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});