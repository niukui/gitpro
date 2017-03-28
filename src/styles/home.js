import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tips: {
    flex: .15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderBottomWidth: .5,
    alignSelf: 'stretch',
    marginTop: 7
  },
  tip: {
    flex: .5,
    fontSize: 20,
    textAlign: 'left',
    textAlignVertical: 'top',
    marginLeft: 4,
    paddingLeft: 4
  },
  user: {
    flex: .2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: .5,
    alignSelf: 'stretch'
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  avatarContainer: {
    height: 90,
    width: 90,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth:.1,
    backgroundColor: 'white',
    marginLeft:5,
    marginRight:5,
  },
  userInfo: {
    flex: 1
  },
  userName: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left'
  },
  memberId: {
    fontSize: 12,
    marginBottom: 6,
    textAlign: 'left'
  },
  attachments: {
    flex: .5,
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch'
  },
  attachmentButton: {
    flex: 1,
    justifyContent: 'center',
    margin: 5,
    padding: 5,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    backgroundColor: 'gray'
  },
  attachmentButtonText: {
    textAlign: 'center'
  }
});