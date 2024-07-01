import { View, StyleSheet, FlatList } from 'react-native'
import ProductCard from './ProductCard'

export type ProductList = {
    products: any[]
}


export default function ProductsList ({
  products
} : ProductList) {
  if (products == null) return 
  
  return (
    <FlatList
      data={products}
      renderItem={({item: product}) => (
        <View style={styles.listItem} key={product.id}>
          <ProductCard bordered product={product} />
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 18,
  }
})