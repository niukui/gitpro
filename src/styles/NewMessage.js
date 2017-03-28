import {StyleSheet,Dimensions} from 'react-native';
const DEVICE_WIDTH=Dimensions.get('window').width;
export default StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    messageHeader:{
        flex:1,
        padding:10,
        width:DEVICE_WIDTH-20,
        backgroundColor:'#ddd',
        marginBottom:7,
        marginTop:7,
        justifyContent:'center'

    },
    messageBody:{
        flex:6,
        width:DEVICE_WIDTH-20,
        backgroundColor:'#ddd',
        marginBottom:5,
        padding:10,

    },
    messageSubject:{
        flex:.5,
        backgroundColor:'#fff',
        marginBottom:8,
        padding:5,
    },
    messageMain:{
        flex:3,
        backgroundColor:'#fff',
        textAlignVertical:'top'
    },
})
