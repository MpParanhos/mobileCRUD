import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007FFF',
        alignItems:'center',
        padding: 5,
    },
    title:{
        top: 10,
        marginBottom: 10,
        fontSize: 20,
        color: '#FFFAFA' 
    },
    textInput:{
        backgroundColor:'#fff',
        height: 30,
        width: 300,
        borderRadius: 7,
        padding: 5,
        top: 5,
        marginBottom: 5
    },
    text:{
        top: 5,
        bottom: 5,
        color: '#FFFAFA'
    },
    buttom:{
        width: 70,
        backgroundColor: '#C0C0C0',
        top: 15,
        borderRadius: 7,
        height: 30,
        justifyContent:'center',
        alignItems: 'center'
    }
  });

export default styles;