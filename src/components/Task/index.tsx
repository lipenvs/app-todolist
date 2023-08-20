import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Task() {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskLine}>
        <TouchableOpacity style={styles.btnCheck}>
          <Image source={require("@/assets/uncheck.png")} />
        </TouchableOpacity>
        <Text style={styles.taskText}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
        </Text>
      </View>
      <TouchableOpacity style={styles.btnDelete}>
        <Image source={require("@/assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
