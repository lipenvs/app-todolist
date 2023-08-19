import { StatusBar } from "expo-status-bar";
import Home from "@/screens/Home";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="transparent" style="light" />
      <Home />
    </>
  );
}
