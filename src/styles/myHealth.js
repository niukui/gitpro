import {
  StyleSheet,Dimensions
} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: '#00FF7F',
      width:DEVICE_WIDTH,
  },
    eventDetailHeader:{
      flexDirection:'row',
        marginTop:5,
       marginLeft:5,
    },
    eventDetails:{
      flex:1,
        backgroundColor:'#555',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    eventDetailTitle:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#eee'
    },
    eventDescription:{
      flex:8,
        //backgroundColor:"#ddd",
    },
   listItemView:{
    borderWidth:2,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    
   },
});