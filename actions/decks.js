import {getDecks, saveDeck} from '../utils/api'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

function receiveDecks(decks) {
	return {
		type: RECEIVE_DECKS,
		decks
	}
}

export function handleReceiveDecks() {
	return (dispatch) => {
		return getDecks().then(
			decks => dispatch(receiveDecks(decks))
		)
	}
}

function addDeck(deck) {
	return {
		type: ADD_DECK,
		deck
	}
}

export function handleAddDeck(title, cb) {
	return (dispatch) => {
		return saveDeck(title).then(
			deck => dispatch(addDeck(deck))
		).then(result => cb(result.deck)
		).catch(err => {
			console.log(err)
			alert('An error occurred. Please try again later')
		})
	}
}
