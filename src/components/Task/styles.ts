import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    borderWidth: 1,
    borderColor: "#333333",
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },

  taskText: {
    flex: 1,
    color: "#F2F2F2",
  },

  taskLine: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  btnDelete: {
    padding: 5,
  },

  btnCheck: {
    padding: 5,
  },
});
