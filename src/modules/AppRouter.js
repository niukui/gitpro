/*eslint-disable react/prop-types*/

import React from 'react';
import HomeViewContainer from './home/HomeViewContainer';
import AttachmentsViewContainer from './attachments/AttachmentsViewContainer';
import MessagesViewContainer from './messages/MessagesViewContainer';
import MyHealthViewContainer from './myHealth/MyHealthViewContainer';
import CalendarViewContainer from './calendar/CalendarViewContainer';
import MessageDetailViewContainer from './MessageDetail/MessageDetailViewContainer';
import NewMessageViewContainer from './newMessage/NewMessageViewContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */

export default function AppRouter(props) {
  const key = props.scene.route.key;

  if (key === 'Home') {
    return <HomeViewContainer/>;
  }
  if (key === 'Messages') {
    return <MessagesViewContainer/>;
  }
  if (key === 'MyHealth') {
    return <MyHealthViewContainer/>;
  }
  if (key === 'Calendar') {
    return <CalendarViewContainer/>;
  }
  if (key === 'HomeAttachments') {
    return <AttachmentsViewContainer/>;
  }
  if (key === 'messageDetail'){
    return <MessageDetailViewContainer/>
  }
  if (key === 'newMessage'){
    return <NewMessageViewContainer/>
  }

  throw new Error('Unknown navigation key: ' + key);
}
