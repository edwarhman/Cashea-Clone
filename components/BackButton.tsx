import { useThemeColor } from "@/hooks/useThemeColor";
import { Feather } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { StyleSheet, Touchable, TouchableHighlight } from "react-native";

export default function BackButton() {
    const color = useThemeColor({}, 'icon');

    function goBack() { 
        router.back();
    }

    return(
        <TouchableHighlight onPress={goBack}>
            <Feather style={styles.container} name="chevron-left" size={24} color={color} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})