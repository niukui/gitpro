import {
  StyleSheet,Dimensions
} from 'react-native';
const DEVICE_WIDTH=Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listViewContainer:{
    flex: 8,
    alignSelf: 'stretch',
  },
  listItemView:{
    marginTop:5,
    paddingBottom:5,
    marginLeft:7,
    marginRight:7,
    borderBottomWidth: .3,
    flexDirection:'row',
  },
  ListItemFrom:{},
  ListItemTo:{},
  ListItemBody:{},
  messageHeader:{
      //backgroundColor:'#eee',
      flex:.1,
      width:DEVICE_WIDTH,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      padding:10,
      borderBottomWidth:.4,
  },
  searchContainer:{
      flex:.1,
      width:DEVICE_WIDTH,
      borderBottomWidth:.3,
      padding:5,
      paddingLeft:10,
      paddingRight:10,

  },
    searchBox:{
      flex:1,
      borderWidth:.2,
      flexDirection:'row',
      //backgroundColor:'#333',
      alignItems:'center',
      paddingLeft:5,
    },
    itemInfo:{
        flex:3,
    },
    receiveTime:{
        flex:1,
        justifyContent:'center',
    },

    rowBack: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0
    },
    backTextWhite: {
        color: '#FFF'
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        justifyContent: 'center',
    },
});