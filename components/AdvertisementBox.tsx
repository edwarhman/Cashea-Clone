import { Colors } from "@/constants/Colors";
import ThemedButton from "./ThemedButton";
import { ThemedText } from "./ThemedText";
import { StyleSheet, View } from "react-native";

export default function AdvertisementBox() {

    return(
      <View style={styles.advertisement}>
        <ThemedText darkColor={Colors.advertisement.secondary}>Paga solo la inicial</ThemedText>
        <ThemedText type="defaultSemiBold">Llevate tu producto</ThemedText>
        <View style={styles.button}>
          <ThemedButton
            title="Compra ya"
            type="advertisement"
            onPress={()=> {alert('Wow you are awesome')}}
          />
        </View>
      </View>
    )

}

const styles = StyleSheet.create({
  advertisement: {
    backgroundColor: '#000',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 25,
  },
  button: {
    marginTop: 10,
  }
})