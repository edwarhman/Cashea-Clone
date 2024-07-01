import { useThemeColor } from "@/hooks/useThemeColor";
import { List, ListAccordionProps, ListItemProps } from "react-native-paper";
import { ThemedText } from "./ThemedText";


export default function ThemedAccordion({ children, title, style, ...rest }: ListAccordionProps) {
    const backgroundColor = useThemeColor({}, 'background')
    return (
        <List.Accordion
            title={typeof title === 'string' ? <ThemedText>{title}</ThemedText> : title}
            titleNumberOfLines={100}
            style={[
                { backgroundColor },
                style
            ]}
            {...rest}
        >
            {children}
        </List.Accordion>
    )
}

export function ThemedListItem({ title }: ListItemProps) {
    if (typeof title === 'string') {
        return <List.Item style={{flexWrap: "wrap"}} titleNumberOfLines={100} title={<ThemedText lineBreakMode="head" >{title}</ThemedText>} />
    }

    return (
        <List.Item
            title={title}
        />
    )
}

