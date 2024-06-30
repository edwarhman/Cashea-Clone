import { StyleSheet, View } from "react-native";

export default function Section({children}: {children: React.ReactNode}) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 15,
  },
});