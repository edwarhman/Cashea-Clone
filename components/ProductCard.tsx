import { StyleSheet, Image, Text, View, } from 'react-native'
import { ThemedText } from './ThemedText'
import { useThemeColor } from '@/hooks/useThemeColor';

type ProductCardProps = {
  product: any;
  bordered?: boolean;
}

export default function ProductCard({
  product,
  bordered: rounded = false
}: ProductCardProps) {
  const backgroundColor = useThemeColor({}, 'productCardBackground');
  const shadowColor = useThemeColor({}, 'shadow');

  return (
    <View style={[
      rounded ? { borderRadius: 15 } : undefined,
      styles.container,
      { shadowColor, shadowRadius: 10 }
    ]}>
      <View
        style={[
          { backgroundColor },
          styles.imageContainer
        ]}
      >
        <Image
          style={styles.image}
          source={{
            uri: product.images[0]
          }}
        />
      </View>
      <View
        style={[
          { backgroundColor },
          styles.body
        ]}
      >
        <ThemedText type='subtitle' >{'$' + product.price}</ThemedText>
        <ThemedText darkColor='#555' lightColor='#aaa' >{product.brand}</ThemedText>
        <ThemedText
          numberOfLines={1}
          type='defaultBold'
        >{product.title + ' - ' + product.description}</ThemedText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  image: {
    aspectRatio: 1
  },
  imageContainer: {
    elevation: 2,
  },
  body: {
    marginTop: 6,
    padding: 12,
    elevation: 2,
  }
})