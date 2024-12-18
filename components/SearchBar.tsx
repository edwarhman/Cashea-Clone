import { Colors } from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { Controller, Form, useForm } from "react-hook-form";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { TextInput } from "react-native-paper";

export type SearchBarProps = {
    value?: string;
    onSearch: (any: any) => void;
}

export default function SearchBar({ value = '',  onSearch }: SearchBarProps) {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            search: '',
        }
    });
    return (
        <View style={styles.container}>
            <Controller
                control={control}
                name="search"
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.searchBar}
                        value={value}
                        onChangeText={onChange}
                        onSubmitEditing={handleSubmit(onSearch)}
                    />
                )}
            />
                <TouchableWithoutFeedback onPress={handleSubmit(onSearch)}>
                    <Feather style={styles.searchIcon} name="search" size={24} color="black" />
                </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.global.brand,
        alignItems: 'center',
        borderRadius: 10
    },
    searchBar: {
        flex: 1,
        padding: 0,
        backgroundColor: Colors.global.white,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    searchIcon: {
        marginHorizontal: 10
    },
});