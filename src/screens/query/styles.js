import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#007FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        marginTop: 20,
        color: '#FFFAFA'
    },
    list:{
        marginTop: 20,
        width: '80%'
    },
    itemList:{
        padding: 24,
        borderRadius: 7,
        backgroundColor: '#FFFAFA',
        marginBottom: 16,
    },
    index:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    caixa:{
        backgroundColor: '#FFFAFA',
        width: 110,
        height: 40,
        top: 15,
        borderRadius: 8,
        justifyContent:'center',
        alignItems:'center'
    },
    but1:{
        position: 'absolute',
        right: 10,
        top: 0,
    },
    but2:{
        position: 'absolute',
        right: 10,
        top: 30
    },
    buttom:{
        backgroundColor: '#C0C0C0',
        height: 40,
        width: 120,
        borderRadius: 7,
        padding: 5,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        top: 10
      },
    
  });