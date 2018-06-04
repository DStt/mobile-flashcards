import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

import {handleAddDeck} from '../actions/decks'

class DeckDetails extends Component {

	state = {
		title: ''
	}

	save = () => {
		this.props.dispatch(handleAddDeck(this.state.title, () => {
			this.props.navigation.navigate('DeckList')
		}))
	}

	render() {
		return (
			<View>
				<Text>Add a deck</Text>
				<TextInput onChangeText={(title) => this.setState({title})} value={this.state.title}/>
				<TouchableOpacity onPress={this.save}>
					<Text>SAVE</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const mapStateToProps = ({}) => ({})

export default connect(mapStateToProps)(DeckDetails)