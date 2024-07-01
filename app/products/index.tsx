import ProductsListContainer from "@/components/ProductsListContainer";
import { StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import SearchBar from "@/components/SearchBar";
import useProducts from "@/hooks/useProducts";
import { useEffect } from "react";
import BackButton from "@/components/BackButton";

export default function ProductsPage() {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts({search: ''});
  }, []);
  
  return (
    <ThemedView style={styles.container}>
      <View style={styles.head}>
        <BackButton />
        <View style={styles.searchBar}>
          <SearchBar onSearch={getProducts} />
        </View>
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
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchBar: {
    flexGrow: 1,
  },
  backwardIcon: {
    marginRight: 10,
    marginLeft: 10,
  },
});
