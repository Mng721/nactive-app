import { StyleSheet, Text, View, FlatList, Image, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPopularMovie, getPopularTVSeries } from '@/api/Movie'
import MoviesList from '@/components/movie/MoviesList'

const Create = () => {
    const [popularMovieData, setPopularMovieData] = useState<{
        popularMovies: any[],
        currentPage: number
    }>({
        popularMovies: [],
        currentPage: 1,
    })
    const [popularTVSeriesData, setPopularTVSeriesData] = useState<{
        popularTVSeries: any[],
        currentPage: number
    }>({
        popularTVSeries: [],
        currentPage: 1,
    })

    useEffect(() => {
        if (popularMovieData.popularMovies.length === 0) {
            getPopularMovie(popularMovieData.currentPage)
                .then(res => {
                    setPopularMovieData({ ...popularMovieData, popularMovies: res.data.results })
                })
        }
        if (popularTVSeriesData.popularTVSeries.length === 0) {
            getPopularTVSeries(popularTVSeriesData.currentPage)
                .then(res => {
                    setPopularTVSeriesData({ ...popularTVSeriesData, popularTVSeries: res.data.results })
                })
        }
    }, [])
    return (
        <SafeAreaView>
            <Text style={{
                color: "white"
            }} className='font-psemibold text-3xl'>Popular movies</Text>
            <MoviesList data={popularMovieData.popularMovies} type='movie' />

            <Text style={{
                color: "white"
            }} className='font-psemibold text-3xl'>Popular TV Series</Text>
            <MoviesList data={popularTVSeriesData.popularTVSeries} type='tvseries' />

        </SafeAreaView>
    )
}

export default Create

const styles = StyleSheet.create({

})