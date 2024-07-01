import { useThemeColor } from "@/hooks/useThemeColor";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";

export default function BackButton() {
    const color = useThemeColor({}, 'icon');

    function goBack() { 
        router.back();
    }

    return(
        <TouchableWithoutFeedback onPress={goBack}>
            <Feather style={styles.container} name="chevron-left" size={24} color={color} />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})