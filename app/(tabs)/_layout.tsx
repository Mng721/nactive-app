import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import { Tabs } from 'expo-router'
import { clsx } from 'clsx';
import { icons } from "../../constants";
const TabIcon = ({ icon, color, name, focused }: { icon?: any, color?: any, name?: string, focused?: boolean }) => {
    return (
        <View style={styles.tabIconContainer}>
            <Image
                source={icon}
                style={styles.tabIconImage}
                resizeMode='contain'
                tintColor={color}
            />
            <Text
                style={{ color: color }}
                className={` whitespace-nowrap capitalize ${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>{name}</Text>
        </View>
    )
}
const TabsLayout = () => {
    return (
        <>
            <Tabs>
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, focused }) => {
                            return (
                                <TabIcon
                                    icon={icons.home}
                                    color={color}
                                    focused={focused}
                                    name='home'
                                />
                            )
                        }

                    }
                    } />

                <Tabs.Screen
                    name='create'
                    options={{
                        title: 'Create',
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, focused }) => {
                            return (
                                <TabIcon
                                    icon={icons.plus}
                                    color={color}
                                    focused={focused}
                                    name='create'
                                />
                            )
                        }

                    }
                    } />

                <Tabs.Screen
                    name='bookmark'
                    options={{
                        title: 'Bookmark',
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, focused }) => {
                            return (
                                <TabIcon
                                    icon={icons.bookmark}
                                    color={color}
                                    focused={focused}
                                    name='bookmark'
                                />
                            )
                        }

                    }
                    } />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, focused }) => {
                            return (
                                <TabIcon
                                    icon={icons.profile}
                                    color={color}
                                    focused={focused}
                                    name='profile'
                                />
                            )
                        }

                    }
                    } />
            </Tabs>

        </>
    )
}

export default TabsLayout

const styles = StyleSheet.create({
    tabIconContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "auto",
        alignItems: "center",
        justifyContent: "center"
    },
    tabIconImage: {
        width: 24,
        height: 24
    }
})