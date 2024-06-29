import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export default function Header() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Header</ThemedText> 
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});