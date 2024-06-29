import Header from "@/components/Header";
import { ThemedView } from "@/components/ThemedView";
import { Slot } from "expo-router";
import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <PaperProvider>
      <ThemedView style={styles.container}>
        <Header />
        <Slot />
      </ThemedView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})