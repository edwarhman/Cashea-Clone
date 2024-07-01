import ProductsListContainer from "@/components/ProductsListContainer";
import { StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import SearchBar from "@/components/SearchBar";
import useProducts from "@/hooks/useProducts";
import { useEffect } from "react";

export default function ProductsPage() {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts({search: ''});
  }, []);
  
  return (
    <ThemedView style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar onSearch={getProducts} />
      </View>
      <ProductsListContainer products={products} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    margin: 12,
  },
  searchBar: {
    marginBottom: 16,
  }
});
