import { ScrollView, StyleSheet, Text, Image, View, FlatList, Button, SafeAreaView, ActivityIndicator, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchPkmns } from '@/api/Pokemon'

const Home = () => {
    const [currentData, setCurrentData] = useState<{ searchData: any[], data: any[], currentPage: string, loading: boolean }>({
        searchData: [],
        data: [],
        currentPage: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12",
        loading: true
    })

    const [isFirstPageReceived, setIsFirstPageReceived] = useState(false);
    const getPokemonsPaging = async () => {
        if (currentData.currentPage === null) {
            setCurrentData({
                ...currentData,
                loading: false
            })
            return
        }
        await fetchPkmns(currentData.currentPage).then(response => {
            console.log(response.data?.results)
            setCurrentData({
                ...currentData,
                currentPage: response.data?.next,
                data: [...currentData.data, ...response.data?.results],
            })
        })
    }



    const ListEndLoader = () => {
        if (currentData.currentPage === null) {
            return <Text>End of list</Text>;
        }

        if (!isFirstPageReceived && currentData.loading) {
            // Show loader at the end of list when fetching next page data.
            return <Text>Loading...</Text>;
        }
    };
    useEffect(() => {
        if (isFirstPageReceived) {
            getPokemonsPaging()
            setIsFirstPageReceived(true)
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text className='font-psemibold'>Home</Text>
            <Image
                style={styles.image}
                resizeMode='contain'
                source={{ uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw" }}

            />
            <FlatList
                data={currentData.data}
                numColumns={1}
                renderItem={({ item, index }) =>
                    <TouchableOpacity activeOpacity={0.6} key={index}>
                        <View style={{ ...styles.card, backgroundColor: "#ccc" }}>
                            <Text style={styles.cardText} numberOfLines={1}>{`#${index + 1}. ${item.name}`}</Text>
                            <Image
                                style={styles.cardImage}
                                resizeMode='contain'
                                onError={({ currentTarget }) => { }}
                                source={{ uri: `https://img.pokemondb.net/artwork/large/${item.name}.jpg` }}
                            />
                        </View>
                    </TouchableOpacity >
                }
                keyExtractor={item => item.id}
                onEndReached={getPokemonsPaging}
                onEndReachedThreshold={2}
                ListFooterComponent={ListEndLoader}
            />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    image: {
        borderRadius: 16,
        height: 200,
        width: 200
    },
    cardImage: {
        height: 100,
        width: 100,
        borderRadius: 16,
    },
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",

    },
    card: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderColor: "#ccc",
        padding: 8,
        borderWidth: 1,
        borderRadius: 16,
        marginBottom: 8,
        marginHorizontal: 8
    },
    cardText: {
        textTransform: "capitalize",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }
})