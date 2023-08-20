import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Task from "@/components/Task";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("@/assets/logo.png")} />
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

      <View style={styles.criadasConcluidas}>
        <TouchableOpacity style={styles.linhaQtd}>
          <Text style={styles.criadas}>Criadas</Text>
          <Text style={styles.qtd}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linhaQtd}>
          <Text style={styles.concluidas}>Concluídas</Text>
          <Text style={styles.qtd}>0</Text>
        </TouchableOpacity>
      </View>

      <Task />
      <Task />
    </View>
  );
}
