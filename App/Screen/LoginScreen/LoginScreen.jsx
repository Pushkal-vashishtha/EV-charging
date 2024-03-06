import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <View style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:50
    }}>
      <Image source={require("./../../../assets/images/logo.png")} style={styles.logo}/>
      <Image source={require("./../../../assets/images/a.png")} style={styles.img}/>
      <View style={{
        padding:20
      }
      }><Text
      style={styles.t1}>
        Lorem ipsum</Text>
        <Text style={styles.t2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet asperiores nulla aspernatur sit a aperiam perspiciatis reprehenderit odio pariatur saepe, quia nemo unde deserunt hic necessitatibus delectus adipisci rerum? Nostrum.</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  logo:{
    width:40,
    height:100,
  },
  img:{
    height:100,
    width:100,
    alignItems:'center',
    objectFit:'cover'
  },t1:{

  },
  t2:{
    
  }
})
