import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import Task from "@/components/Task";
import { useEffect, useState } from "react";

type Task = {
  description: string;
  check: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTask, setCurrentTask] = useState("");
  const [concluidas, setConcluidas] = useState(0);

  useEffect(() => {
    updateQtdConcluidos();
  }, [tasks]);

  function addTask() {
    setTasks((prevState) => [
      ...prevState,
      {
        description: currentTask,
        check: false,
      },
    ]);

    setCurrentTask("");
  }

  function handleCheck(index: number) {
    const updatedItems = [...tasks];
    updatedItems[index].check = !updatedItems[index].check;
    setTasks(updatedItems);
    updateQtdConcluidos();
  }

  function updateQtdConcluidos() {
    const qtdConcluidas = tasks.filter((task) => task.check).length;
    setConcluidas(qtdConcluidas);
  }

  function handleDelete(index: number) {
    Alert.alert(
      "Excluir Tarefa",
      "Tem certeza que deseja excluir essa tarefa?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          isPreferred: true,
          onPress: () => {
            const updatedItems = [...tasks];
            updatedItems.splice(index, 1);
            setTasks(updatedItems);
          },
        },
      ]
    );
  }

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
          onChangeText={setCurrentTask}
          value={currentTask}
        />
        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Image source={require("@/assets/plus.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.criadasConcluidas}>
        <View style={styles.linhaQtd}>
          <Text style={styles.criadas}>Criadas</Text>
          <Text style={styles.qtd}>{tasks.length}</Text>
        </View>
        <View style={styles.linhaQtd}>
          <Text style={styles.concluidas}>Concluídas</Text>
          <Text style={styles.qtd}>{concluidas}</Text>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={tasks}
          renderItem={({ item, index }) => (
            <Task
              description={item.description}
              onCheck={() => handleCheck(index)}
              onDelete={() => handleDelete(index)}
              check={item.check}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Image
                style={styles.imgEmpty}
                source={require("@/assets/clipboard.png")}
              />

              <Text style={styles.titleEmpty}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.msgEmpty}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
