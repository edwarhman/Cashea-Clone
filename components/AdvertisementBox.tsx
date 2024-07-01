import { Colors } from "@/constants/Colors";
import ThemedButton from "./ThemedButton";
import { ThemedText } from "./ThemedText";
import { StyleSheet, View } from "react-native";

export type AdvertisementBoxProps = {
  onPress?: () => void;
}
export default function AdvertisementBox({
  onPress,
}: AdvertisementBoxProps) {

    return(
      <View style={styles.advertisement}>
        <ThemedText 
          darkColor={Colors.advertisement.secondary}
          lightColor={Colors.advertisement.secondary}
        >Paga solo la inicial</ThemedText>
        <ThemedText
         type="defaultSemiBold"
         lightColor={Colors.advertisement.primary}
         darkColor={Colors.advertisement.primary}
        >Llevate tu producto</ThemedText>
        <View style={styles.button}>
          <ThemedButton
            title="Compra ya"
            type="advertisement"
            onPress={onPress}
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