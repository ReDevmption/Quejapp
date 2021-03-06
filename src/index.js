import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
import { StackNavigator } from "react-navigation";

import VerDenuncias from "./components/VerDenuncias";
import DenunciarQueja from "./components/DenunciarQueja";

class Main extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require("./images/quejapp.png")} />

        <View style={styles.title}>
          <Text style={styles.titleText}>
            {"\n"} Alza la voz con esta aplicación. {"\n"} Publica quejas y
            denuncias por dependencia gubernamental {"\n"} ¡Acabemos con la
            corrupción!
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigate("Generales")}
          style={styles.generales}
        >
          <Text style={styles.buttonText}>Ver todas las denuncias</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate("Buscar")}
          style={styles.denunciar}
        >
          <Text style={styles.buttonText}>Encuentra denuncias</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate("Denunciar")}
          style={styles.denunciar}
        >
          <Text style={styles.buttonText}>Haz una denuncia</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate("Glosario")}
          style={styles.denunciar}
        >
          <Text style={styles.buttonText}>Conoce la corrupción</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
/*
<TouchableOpacity onPress={() => navigate("Analiza")} style={styles.denunciar}>
  <Text style={styles.buttonText}>Analiza tu caso</Text>
</TouchableOpacity>;
*/
const window = Dimensions.get("window");

export default Main;

const styles = StyleSheet.create({
  container: {
    width: window.width * 1,
    height: window.height * 1,
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18
  },
  logo: {
    marginTop: 20,
    height: 90,
    width: 150
  },
  title: {
    alignSelf: "center",
    justifyContent: "center",
    width: 300,
    marginLeft: 40,
    color: "#000",
    paddingBottom: 20
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center"
  },
  generales: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: window.width * 0.7,
    height: window.width * 0.2,
    marginTop: 15,
    borderRadius: 80,
    backgroundColor: "#425d8b"
  },
  denunciar: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    width: window.width * 0.7,
    height: window.width * 0.2,
    marginTop: 10,
    borderRadius: 80,
    backgroundColor: "#425d8b"
  }
});
