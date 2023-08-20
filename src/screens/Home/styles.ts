import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },

  header: {
    backgroundColor: "#0D0D0D",
    height: 173,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#FFF",
  },

  logo: {
    width: 110,
    height: 32,
  },

  newTask: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    top: -25,
    gap: 4,
    marginHorizontal: 24,
  },

  textInput: {
    flex: 1,
    color: "#F2F2F2",
    backgroundColor: "#262626",
    height: 54,
    borderWidth: 1,
    borderColor: "#0D0D0D",
    borderRadius: 6,
    paddingHorizontal: 16,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E6F9F",
    width: 52,
    height: 52,
    borderRadius: 6,
  },

  criadasConcluidas: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    paddingBottom: 20,
  },

  criadas: {
    color: "#4EA8DE",
    fontWeight: "bold",
  },

  concluidas: {
    color: "#8284FA",
    fontWeight: "bold",
  },

  linhaQtd: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  qtd: {
    color: "#F2F2F2",
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: "#333333",
    borderRadius: 10,
  },

  emptyList: {
    flex: 1,
    marginHorizontal: 24,
    paddingTop: 48,
    borderTopWidth: 1,
    borderColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
  },

  titleEmpty: {
    color: "#808080",
    fontWeight: "bold",
  },

  msgEmpty: {
    color: "#808080",
  },

  imgEmpty: {
    marginBottom: 16,
  },
});
