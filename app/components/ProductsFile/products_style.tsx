import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:5,
        borderRadius:10,
        overflow: "hidden",
        elevation: 3,
        flex:1,

    },
    title:{
        marginBottom:5,
        fontSize:16,
        fontWeight: 'bold',


    },
    image:{
    width: "100%",
    height: 180,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#fff",

    },   
    price:{
    fontSize: 14,
    color: "#333",
    marginBottom: 5,


    },
    stock:{
        fontWeight: '600',
        fontSize: 16,
        marginTop:5,
        color: 'green',
        marginBottom: 10,

    },
    outOfStock:{
        fontSize:20,
        color: 'red',
        fontWeight: 'bold',

    },
    body:{
    paddingHorizontal:10,
    paddingVertical: 8,
    }

    
})