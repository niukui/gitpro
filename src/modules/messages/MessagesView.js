import React, {PropTypes, Component} from 'react';
import {
    ListView,
    TouchableHighlight,
    Text,
    View,
    ActivityIndicator,
    TextInput,
    TouchableOpacity,
    Button,
    Image
} from 'react-native';
import styles from './../../styles/messages';
import commonStyles from './../../styles/common';
import Icon from 'react-native-vector-icons/FontAwesome';
import SwipeListView from './../../components/SwipeListView';
import SwipeRow from './../../components/SwipeRow';
class MessagesView extends Component {

    static propTypes = {
        loading: PropTypes.bool.isRequired,
        messagesStateActions: PropTypes
            .shape({deleteMessages: PropTypes.func.isRequired, loadMessages: PropTypes.func.isRequired})
            .isRequired,
        navigationStateActions: PropTypes
            .shape({pushRoute: PropTypes.func.isRequired})
            .isRequired,
        messages: PropTypes.array.isRequired
    };

    constructor(props, context) {
        super(props, context);

        this.loadMessages = this
            .loadMessages
            .bind(this);
        this.deleteMessages = this
            .deleteMessages
            .bind(this);
        this.renderMessageRow = this
            .renderMessageRow
            .bind(this);
        this.renderMessageHeader = this
            .renderMessageHeader
            .bind(this);
        this.renderSearchBox = this
            .renderSearchBox
            .bind(this);
        //view message detail
        this.viewMessageDetail = this
            .viewMessageDetail
            .bind(this);
        this.viewNewMessage = this
            .viewNewMessage
            .bind(this);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.ds = ds;
        this.deleteRow = this
            .deleteRow
            .bind(this);
        this.state = {
            dataSource: ds.cloneWithRows([]),
            selectedIds: [],
        };  
    }
    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].closeRow();
        const newData = [...this.state.dataSource];
        newData.splice(rowId, 1);
        this.setState({dataSource: newData});
    }
    viewMessageDetail(){
        this
            .props
            .navigationStateActions
            .pushRoute({key:'messageDetail',title:'Detail'});
    }
    viewNewMessage(){
        this
            .props
            .navigationStateActions
            .pushRoute({key:'newMessage',title:'New Message'});
    }
    loadMessages() {
        this
            .props
            .messagesStateActions
            .loadMessages(this.props.username);
    }
    deleteMessages() {
        this
            .props
            .deleteMessages
            .loadMessages(this.state.selectedIds);
    }

    componentDidMount() {
        if (!this.props.messages || !this.props.messages.length) {
            this.loadMessages();
        }else{
            this.setState({
                dataSource: this
                    .ds
                    .cloneWithRows(this.props.messages)
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.messages !== this.props.messages) {
            this.setState({
                dataSource: this
                    .ds
                    .cloneWithRows(nextProps.messages)
            });
        }
    }

    renderMessageRow(rowData,secId,rowId,rowMap) {
        return (
            <SwipeRow
                disableRightSwipe
                rightOpenValue={-75}
            >
                <View style={styles.rowBack}>
                    <Text>
                       left
                    </Text>
                    <TouchableOpacity
                        style={[styles.backRightBtn,styles.backRightBtnRight]}
                        onPress={_ => this.deleteRow(secId,rowId,rowMap)}
                    >
                        <Text style={styles.backTextWhite}>Delete</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    accessible={true}
                    accessibilityLabel={'View Detail'}
                    onPress={this.viewMessageDetail}
                    style={styles.rowFront}
                    activeOpacity={1}
                >
                    <View style={styles.listItemView}>
                        <View style={styles.itemInfo}>
                            <Text style={styles.ListItemFrom}>From: {rowData.From.Name}</Text>
                            <Text style={styles.ListItemTo}>To: {rowData.To.Name}</Text>
                            <Text style={styles.ListItemBody}>Body: {rowData.Body}</Text>
                        </View>
                        <View style={styles.receiveTime}>
                            <Text>
                                1:32P.M.
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </SwipeRow>
        );
    }
    /*
    renderMessageRow(rowData) {
     return (
     <TouchableOpacity
         accessible={true}
         accessibilityLabel={'View Detail'}
         onPress={this.viewMessageDetail}
     >
         <View style={styles.listItemView}>
             <View style={styles.itemInfo}>
                 <Text style={styles.ListItemFrom}>From: {rowData.From.Name}</Text>
                 <Text style={styles.ListItemTo}>To: {rowData.To.Name}</Text>
                 <Text style={styles.ListItemBody}>Body: {rowData.Body}</Text>
             </View>
             <View style={styles.receiveTime}>
                 <Text>
                     1:32P.M.
                 </Text>
             </View>
         </View>
     </TouchableOpacity>

     );
     }
     */
    renderMessageHeader(){
        return(
            <View style={styles.messageHeader}>
                <TouchableHighlight>
                    <Text style={{borderBottomWidth:.2}}>select</Text>
                </TouchableHighlight>
                <Button
                        onPress={this.viewNewMessage}
                        title='New Message'/>
            </View>
        );
    }
    renderSearchBox(){

        return(
            <View style={styles.searchContainer}>
                <View style={styles.searchBox}>
                    {/*<Image source={require('./../../../images/pepperoni.png')} style={styles.searchIcon}/>*/}
                    <Icon
                        name="search"
                        backgroundColor="#3b5998"/>
                    <TextInput style={{flex:1}}
                               keyboardType='web-search'
                               underlineColorAndroid='transparent'
                               placeholder='Search Messages' />
                </View>
            </View>
        )
    }
    render() {
        if (this.props.loading) {
            return (
                <View style={{
                    flex: 1
                }}>
                    <ActivityIndicator style={commonStyles.centered}/>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                {this.renderMessageHeader()}
                {this.renderSearchBox()}
                <SwipeListView
                    style={styles.listViewContainer}
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderMessageRow}
                    initialListSize={5}
                />
            </View>
        );
    }
}

export default MessagesView;
