import Header from "@/components/Header";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Slot />
    </>
  );
}
