import { StyleSheet, TouchableWithoutFeedback, View, ButtonProps, ViewProps } from "react-native"; 
import { ThemedText } from "./ThemedText";

export type ThemedButtonProps = {
    title: string;
    type?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link' | 'advertisement';
} & ButtonProps ;

export default function ThemedButton({title, type = 'default',  ...props}: ThemedButtonProps) {
    return (
        <View
        style={[
            styles.container,
            type === 'default' ? styles.default : undefined,
            type === 'advertisement' ? styles.advertisement : undefined,
        ]}
        >
        <TouchableWithoutFeedback
            {...props}
        >
            <ThemedText type="advertisement-button">
                {title}
            </ThemedText>
        </TouchableWithoutFeedback>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    default: {
    },
    advertisement: {
        paddingVertical: 8,
        paddingHorizontal: 40,
        borderColor: '#55ffcc',
        borderWidth: 2,
        borderRadius: 30,
    },

})