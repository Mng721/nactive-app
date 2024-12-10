import { FlatList, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { router } from 'expo-router'

const MoviesList = ({ data, type }: { data: any[], type?: "movie" | "tvseries" }) => {
    return (
        <FlatList
            horizontal
            data={data}
            keyExtractor={item => item.id}
            style={{
                height: "auto",
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) =>
                <TouchableOpacity onPress={() =>
                    type === "movie" ? router.push(`/movie/${item.id}`) : null
                }>
                    <View style={styles.cardContainer}>
                        <Image
                            style={styles.cardImage}
                            resizeMode='contain'
                            source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }}
                        />
                        <Text style={styles.text} numberOfLines={1}>{item.original_title ?? item.name}</Text>
                    </View>
                </TouchableOpacity>
            }
        />
    )
}

export default MoviesList

const styles = StyleSheet.create({
    cardContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: 150,
        height: "auto"
    },
    text: {
        textAlign: "center",
        color: "white",
        textOverflow: "ellipsis",
        overflow: "hidden"
    },

    cardImage: {
        height: 200,
        borderRadius: 16,
    },
})