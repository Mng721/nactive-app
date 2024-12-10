import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { getMovieDetail } from '@/api/Movie';

const MovieDetail = () => {
    const { id } = useLocalSearchParams();

    const [movieData, setMovieData] = useState<{ data: any }>({
        data: {}
    })

    useEffect(() => {
        getMovieDetail({ movieId: id }).then((res) => {
            setMovieData({
                data: res.data
            })
        })
    }, [])
    console.log(movieData)
    useEffect
    return (
        <View style={styles.container}>
            <Image
                className='bg-gradient-to-t from-black'
                style={styles.posterBackground}
                source={{ uri: `https://image.tmdb.org/t/p/original/${movieData.data.poster_path}` }}
            />
            <View style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "transparent"
            }}
                className='bg-gradient-to-t from-black' />
            <View style={{
                position: "absolute",
                bottom: 16,
                display: "flex",
                flexDirection: "column",
                gap: 16
            }}
            >
                <Text style={{
                    color: "white"
                }}
                    className='font-pbold text-4xl'>
                    {movieData.data.original_title}
                </Text>
                <Text style={{
                    color: "white"
                }}>
                    {movieData?.data?.genres?.map((item: any, index: number) => {
                        if (index + 1 === movieData.data.genres.length) {
                            return item.name
                        }
                        return `${item.name}, `
                    })}
                </Text><Text style={{
                    color: "white"
                }}>
                    MovieDetail {id}
                </Text>
            </View>
        </View>
    )
}

export default MovieDetail

const styles = StyleSheet.create({
    container: {
        position: "relative",
        backgroundColor: "black",
        width: "100%",
        height: "auto",
    },
    posterBackground: {
        position: "absolute",
        top: 0,
        resizeMode: "center",
        height: "70%",
        flex: 1,
        aspectRatio: 2 / 3
    }
})