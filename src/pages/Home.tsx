import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Aplicativo</Text>

      <Button
        title="Tirar Foto"
        onPress={() => navigation.navigate("Camera")}/>

      <View style={styles.espaco} />

      <Button
        title="Ver Localização"
        onPress={() => navigation.navigate("Gps")}/>

      <View style={styles.espaco} />

      <Button
        title="Acelerômetro"
        onPress={() => navigation.navigate("Acelerometro")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
  },
  espaco: {
    margin: 10,
  },
});
