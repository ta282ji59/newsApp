import { StyleSheet, Image, Text, View } from 'react-native';


/**
 * 
 * @param {
 * imageUrl:画像URL(string)
 * title:タイトル(string)
 * author:ニュース提供元(string)
 * } props 
 * @returns 
 */

export const ListItem = (props) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.leftContainer}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={{ uri: props.imageUrl }}
                />
            </View>
            <View style={styles.rightContainer}>
                <Text numberOfLines={3} style={styles.text}>{props.title}</Text>
                <Text style={styles.subText}>{props.author}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        marginVertical: 5,
    },
    leftContainer: {
        width: 100,
        backgroundColor: 'black',
    },
    rightContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: "space-between"
    },
    text: {
        fontSize: 16
    },
    subText: {
        fontSize: 12,
        color: "gray"
    },
});
