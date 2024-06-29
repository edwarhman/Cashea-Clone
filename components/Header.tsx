import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { Link } from "expo-router";

export default function Header() {
  return (
    <ThemedView style={styles.container}>
      <Link href='/'><ThemedText>Home</ThemedText></Link>
      <Link href='/products'><ThemedText>Products</ThemedText></Link> 
      <Link href='/about'><ThemedText>About</ThemedText></Link> 
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight
  },
});