import ProductsListContainer from "@/components/ProductsListContainer";
import { StyleSheet } from "react-native";
import { products } from '../../db/products.json';
import { ThemedView } from "@/components/ThemedView";

export default function ProductsPage() {
  return (
    <ThemedView style={styles.container}>
      <ProductsListContainer products={products} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1
  },
});
