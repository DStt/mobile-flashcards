import {RECEIVE_DECKS, ADD_DECK} from '../actions/decks'

export default function decks(state = {}, action) {
	switch (action.type) {
		case RECEIVE_DECKS :
			return {
				...state,
				...action.decks
			}
		case ADD_DECK:
			const deck = action.deck
			return {
				...state,
				[deck.id]: deck
			}
		default :
			return state
	}
}