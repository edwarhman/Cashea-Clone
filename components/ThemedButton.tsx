import { StyleSheet, TouchableWithoutFeedback, View, ButtonProps, ViewProps } from "react-native"; 
import { ThemedText, ThemedTextProps } from "./ThemedText";
import { Colors } from "@/constants/Colors";

export type ThemedButtonProps = {
    title: string;
    type?: 'default' | 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link' | 'advertisement';
} & ButtonProps ;

const mapButtonTypeToTextType = (type: ThemedButtonProps['type']): ThemedTextProps['type'] => {
    switch (type) {
        case 'primary':
            return 'primary-button';
            
        case 'advertisement':
            return 'advertisement-button';
        default:
            return 'default';
    }
}
export default function ThemedButton({title, type = 'default',  ...props}: ThemedButtonProps) {

    return (
        <View
        style={[
            styles.container,
            type === 'default' ? styles.default : undefined,
            type === 'primary' ? styles.primary : undefined,
            type === 'advertisement' ? styles.advertisement : undefined,
        ]}
        >
        <TouchableWithoutFeedback
            {...props}
        >
            <ThemedText type={mapButtonTypeToTextType(type)}>
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
    primary: {
        backgroundColor: Colors.global.brand,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
    },
    advertisement: {
        paddingVertical: 8,
        paddingHorizontal: 40,
        borderColor: '#55ffcc',
        borderWidth: 2,
        borderRadius: 30,
    },

})