import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  description: string;
  onCheck: () => void;
  onDelete: () => void;
  check: boolean;
};

export default function Task(props: Props) {
  function handleCheck() {
    props.onCheck();
  }

  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskLine}>
        <TouchableOpacity style={styles.btnCheck} onPress={handleCheck}>
          <Image
            source={
              props.check
                ? require("@/assets/check.png")
                : require("@/assets/uncheck.png")
            }
          />
        </TouchableOpacity>
        <Text style={props.check ? styles.textCheck : styles.textUncheck}>
          {props.description}
        </Text>
      </View>
      <TouchableOpacity style={styles.btnDelete} onPress={props.onDelete}>
        <Image source={require("@/assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
