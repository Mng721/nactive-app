import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const IndexPage = () => {
    return (
        <View className='bg-black h-full w-full items-center justify-center'>
            <Text className='color-white text-3xl font-pblack'>Text!</Text>
            <Link href="/home" className='color-blue-500' >Go to home</Link>
            <StatusBar style='auto'></StatusBar>
        </View>
    )
}

export default IndexPage

const styles = StyleSheet.create({})