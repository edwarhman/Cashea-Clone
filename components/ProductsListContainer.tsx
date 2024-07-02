import { View, StyleSheet, FlatList } from 'react-native'
import ProductCard from './ProductCard'

export type ProductList = {
    products: any[]
    numColumns?: number
}


export default function ProductsList ({
  products,
  numColumns = 1
} : ProductList) {
  if (products == null) return 
  
  return (
    <FlatList
      data={products}
      numColumns={numColumns}
      ItemSeparatorComponent={() => < View style={{width: 10}} />}
      columnWrapperStyle={ numColumns > 1 ? styles.columnWrapper : undefined }
      renderItem={({item: product}) => (
        <View style={[
          { width: `${100 / numColumns}%` },
          styles.listItem
        ]} key={product.id}> 
          <ProductCard product={product} />
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  columnWrapper: {
    gap: 10
  },
  listItem: {
    flexShrink: 1,
  }
})