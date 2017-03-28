import React, {PropTypes, Component} from 'react';
import {NavigationExperimental, View, TouchableHighlight, Text} from 'react-native';
const {CardStack: NavigationCardStack, Header: NavigationHeader, PropTypes: NavigationPropTypes} = NavigationExperimental;
import AppRouter from '../AppRouter';
import TabBar from '../../components/TabBar';
import styles from './../../styles/navigation';

// Customize bottom tab bar height here if desired
const TAB_BAR_HEIGHT = 50;

class NavigationView extends Component {
  static displayName = 'NavigationView';

  static propTypes = {
    onNavigateBack: PropTypes.func.isRequired,
    onNavigateCompleted: PropTypes.func,
    navigationState: PropTypes.shape({
      tabs: PropTypes
        .shape({
        routes: PropTypes
          .arrayOf(PropTypes.shape({key: PropTypes.string.isRequired, title: PropTypes.string.isRequired}))
          .isRequired
      })
        .isRequired,
      HomeTab: NavigationPropTypes.navigationState.isRequired,
      MessagesTab: NavigationPropTypes.navigationState.isRequired,
      MyHealthTab: NavigationPropTypes.navigationState.isRequired,
      CalendarTab: NavigationPropTypes.navigationState.isRequired
    }),
    switchTab: PropTypes.func.isRequired,
    pushRoute: PropTypes.func.isRequired,
    initRoute: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  };

  componentDidMount(){
    //init navigation
    //this.props.initRoute();
  }

  // NavigationHeader accepts a prop style NavigationHeader.title accepts a prop
  // textStyle
  renderHeader = (sceneProps) => {

    return (<NavigationHeader
      {...sceneProps}
      onNavigateBack={this.props.onNavigateBack}
      renderTitleComponent={() => {
      return (
        <NavigationHeader.Title>
          {sceneProps.scene.route.title}
        </NavigationHeader.Title>
      );
    }}
      renderRightComponent={() => {
      return (
        <TouchableHighlight style={styles.titleButton} onPress={this.props.signOut}>
          <Text style={styles.titleButtonText}>Sign out</Text>
        </TouchableHighlight>
      );
    }}
      renderLeftComponent={() => {
      if (sceneProps.scene.index === 0) {
        return (
          <TouchableHighlight
            style={styles.titleButton}
            onPress={() => {
            console.log('Menu');
          }}>
            <Text style={styles.titleButtonText}>Menu</Text>
          </TouchableHighlight>
        );
      } else {
        return (
          <NavigationHeader.BackButton onPress={this.props.onNavigateBack}></NavigationHeader.BackButton>
        );
      }
    }}/>);
  };

  renderScene = (sceneProps) => {
    // render scene and apply padding to cover for app bar and navigation bar
    return (
      <View style={styles.sceneContainer}>
        {AppRouter(sceneProps)}
      </View>
    );
  };

  render() {
    const {tabs} = this.props.navigationState;
    const tabIndex = tabs.index;

    const tabKey = tabs.routes[tabIndex].key;
    const scenes = this.props.navigationState[tabKey];
    return (
      <View style={styles.container}>
        <NavigationCardStack
          key={'stack_' + tabKey}
          onNavigateBack={this.props.onNavigateBack}
          navigationState={scenes}
          renderHeader={this.renderHeader}
          renderScene={this.renderScene}/>
        <TabBar
          height={TAB_BAR_HEIGHT}
          tabs={tabs}
          currentTabIndex={tabIndex}
          switchTab={this.props.switchTab}/>
      </View>
    );
  }
}

export default NavigationView;
