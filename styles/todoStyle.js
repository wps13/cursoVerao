import { StyleSheet } from 'react-native';
import { black } from 'ansi-colors';

const styles = StyleSheet.create(
    {
        box:{
            width:'100%',
            padding:7.5,
            borderRadius:5,
            marginBottom:7.5,
            shadowColor:'black',
            shadowRadius:3,
            shadowOpacity:1,
            elevation:5
        },
        text:{
            fontSize:16,
            color:'#74777c'
        },      

    }
)

export default styles;