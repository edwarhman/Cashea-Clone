import { StyleSheet, Image, Text, } from 'react-native'
import { ThemedText } from './ThemedText'
import { ThemedView } from './ThemedView'


export default function ProductItem ({
  product
}: any) {
    return (
    <ThemedView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: product.thumbnail
        }}
      />
      <ThemedView style={styles.body}>
        <ThemedText type='title' >{product.title}</ThemedText>
        <ThemedText>{product.description}</ThemedText>
        <ThemedText>{product.brand}</ThemedText>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 15
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  body: {
    padding: 12,
  }
})