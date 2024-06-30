import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";

export default function AvailableBalanceContainer () {
    return (

<View style={styles.availableContainer}>
        <View style={styles.availableMain}>
          <ThemedText type="title">
            $ 190.00
          </ThemedText>
        </View>
        <View style={styles.availableFooter}>
        <ThemedText>
          Compra en cuotas tus productos
        </ThemedText>
        </View>
      </View>
    )
} 

const styles = StyleSheet.create({
  availableContainer: {

  },
  availableMain: {
    padding: 5,
    alignItems: 'center',
    borderBottomWidth: 4,
    borderBottomColor: 'orange',
  },
  availableFooter: {
    marginTop: 5,
    alignItems: 'center'
  }

})