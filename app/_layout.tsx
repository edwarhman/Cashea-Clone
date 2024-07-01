import { ThemedView } from "@/components/ThemedView";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import * as SplashScreen from "expo-splash-screen";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import Constants from "expo-constants";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
}

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
    Inter_400Regular
  });

  useEffect(() => {
    if (loaded) {
      console.log('fonts loaded');
      SplashScreen.hideAsync();
    }

    if (error) {
      console.error(error);
    }
  }, [loaded, error]);

  return (
    <PaperProvider theme={theme}>
      <ThemedView style={styles.root}>
      <ThemedView style={styles.container}>
        <Slot />
      </ThemedView>
      </ThemedView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1
  }
})