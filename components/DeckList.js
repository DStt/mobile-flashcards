import React, {Component} from 'react'
import {View, Text, FlatList} from 'react-native'
import {connect} from 'react-redux'
import {handleReceiveDecks} from '../actions/decks'

class DeckList extends Component {
	static navigationOptions = {
		title: 'Home',
	};

	componentDidMount() {
		this.props.dispatch(handleReceiveDecks())
	}

	render() {
		const {decks} = this.props

		return (
			<View>
				{
					Object.keys(decks).map(deckId => (
						<Text key={deckId}>miao:{JSON.stringify(decks[deckId])}:bau</Text>
					))
				}
				<Text>TOTALI: {Object.keys(decks).length}</Text>
			</View>
		)
	}
}

const mapStateToProps = ({decks}) => ({decks})

export default connect(mapStateToProps)(DeckList)