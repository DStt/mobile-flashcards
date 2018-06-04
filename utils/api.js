import {
	_getDecks,
	_getQuestions,
	_saveDeck,
	_saveQuestion
} from './_DATA'

export function getDecks() {
	return _getDecks()
}

export function getQuestions(deckId) {
	return _getQuestions(deckId)
}

export function saveDeck(deck) {
	return _saveDeck(deck)
}


export function saveQuestion(question) {
	return _saveQuestion(question)
}
