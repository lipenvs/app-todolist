import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("@/assets/Logo.png")} />
      </View>
      <View style={styles.newTask}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.button}>
          <Image source={require("@/assets/plus.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
