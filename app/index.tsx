import { ScrollView, StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Feather } from '@expo/vector-icons';
import AvailableBalanceContainer from "@/components/AvailableBalanceContainer";
import Advertisement from "@/components/AdvertisementBox";
import Section from "@/components/Section";
import ThemedButton from "@/components/ThemedButton";
import { products } from "../db/products.json";
import ProductCard from "@/components/ProductCard";
import { List } from "react-native-paper";
import ThemedAccordion, { ThemedListItem } from "@/components/ThemedAcordion";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Section>
        <View style={styles.search}>
          <Feather style={styles.searchIcon} name="search" size={24} color="black" />
          <ThemedText darkColor='#222' type="defaultSemiBold" >¿Qué necesitas comprar?</ThemedText>
        </View>
      </Section>
      <Section>
        <AvailableBalanceContainer />
      </Section>
      <Section>
        <View style={styles.advertisementContainer}>
          <Advertisement />
        </View>
      </Section>
      <Section>
        <View style={styles.sectionHeader}>
          <ThemedText type="subtitle">Destacados</ThemedText>
          <ThemedButton title="Ver más" type="primary" />
        </View>
        <ScrollView horizontal>
          {
            products.map((product: any) => (
              <View style={{ margin: 12, marginBottom: 18, flexShrink: 10, width: 300 }} key={product.id}>
                <ProductCard bordered product={product} />
              </View>
            ))
          }
        </ScrollView>
      </Section>
      <Section>
        <View style={styles.sectionHeader}>
          <ThemedText type="subtitle">Preguntas frecuentes</ThemedText>
        </View>
        <List.Section>
          <ThemedAccordion title='Uncontrolled Accordion'>
            <ThemedListItem title='First item'/>
            <ThemedListItem title='Second item'/>
          </ThemedAccordion>
        </ List.Section>
      </Section>
    </ScrollView>
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
