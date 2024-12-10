import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PokemonCard = ({ id, name }: { id: number, name: string }) => {
    return (
        <View className='flex flex-row items-center justify-center border shadow border-indigo-600 rounded mb-2'>
            <Text className='capitalize'>{`#${id}. ${name}`}</Text>
            <Image
                className='h-[100px] w-[100px]'
                resizeMode='contain'
                source={{ uri: `https://img.pokemondb.net/artwork/large/${name}.jpg` }}
            />
        </View>
    )
}

export default PokemonCard

const styles = StyleSheet.create({})