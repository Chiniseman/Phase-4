import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AlbumDetails({trackName, artistsName}) {
  return (
    <View style={{justifyContent: 'center'}}>
      <Text style={styles.artist}>{trackName}</Text>
      <Text style={styles.name}>{artistsName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    artist:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#111',
        marginBottom: 10,
    },
    name:{
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 15,
      color: '#111',
      marginBottom: 20
  },
})