import React from 'react'
import {View, Platform, StatusBar} from 'react-native'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware from './middlewares'
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import {Constants} from 'expo'

import DeckList from './components/DeckList'
import DeckDetails from './components/DeckDetails'
import AddDeck from './components/AddDeck'

function UdaciStatusBar({backgroundColor, ...props}) {
	return (
		<View style={{backgroundColor, height: Constants.statusBarHeight}}>
			<StatusBar translucent backgroundColor={backgroundColor} {...props} />
		</View>
	)
}

const Tabs = createBottomTabNavigator({
	DeckList: {
		screen: DeckList,
		navigationOptions: {
			tabBarLabel: 'DeckList'
		}
	},
	AddDeck: {
		screen: AddDeck,
		navigationOptions: {
			tabBarLabel: 'Add Deck'
		}
	}
}, {
	navigationOptions: {
		header: null
	}
})
const MainNavigator = createStackNavigator({
	Home: {
		screen: Tabs
	},
	DeckDetails: {
		screen: DeckDetails
	}
}, {
	headerMode: 'none',
	navigationOptions: {
		headerVisible: false
	}
})

export default class App extends React.Component {

	render() {
		return (
			<Provider store={createStore(reducer, middleware)}>
				<View style={{flex: 1}}>
					<UdaciStatusBar backgroundColor={'purple'} barStyle="light-content"/>
					<MainNavigator/>
				</View>
			</Provider>
		)
	}
}