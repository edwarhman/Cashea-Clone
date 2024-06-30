import { StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Feather } from '@expo/vector-icons';
import AvailableBalanceContainer from "@/components/AvailableBalanceContainer";
import Advertisement from "@/components/AdvertisementBox";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      {/* buscador */}
      <View style={styles.search}>
        <Feather style={styles.searchIcon} name="search" size={24} color="black" />
        <ThemedText darkColor='#222' type="defaultSemiBold" >¿Qué necesitas comprar?</ThemedText>
      </View>

      <AvailableBalanceContainer />
      
      <View style={styles.advertisementContainer}>
        <Advertisement />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 15
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10
  },
  searchIcon: {
    marginRight: 10
  },
  advertisementContainer: {
    marginTop: 20,
    marginHorizontal: 15
  },
});
