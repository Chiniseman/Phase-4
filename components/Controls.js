import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function Controls({
    togglePlayPauseBtn, 
    pause, 
    playNextSong, 
    playPrevSong
 }) {
    return (
        <View style={styles.container}>

            <View style={styles.controls}>
            <TouchableOpacity onPress={playNextSong}>
                <FontAwesome name="backward" size={40} color="#111" />
            </TouchableOpacity>

            {pause ?
                (<TouchableOpacity onPress={togglePlayPauseBtn}>
                    <FontAwesome name="play" size={60} color="#111" />
                </TouchableOpacity>)
                :
                (<TouchableOpacity onPress={togglePlayPauseBtn}>
                    <FontAwesome name="pause" size={60} color="#111" />
                </TouchableOpacity>)
            }
            <TouchableOpacity onPress={playPrevSong}>
                <FontAwesome name="forward" size={40} color="#111" />
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
    },
    timeLabel: {
        color: '#111',
    },
    controls:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        gap: 90,
    }
})

function formatTime(time = 0) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}