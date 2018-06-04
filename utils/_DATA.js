import {formatQuestion, formatDeck} from './helpers'

let decks = [
	{
		id: '8xf0y6ziyjabvozdd253nd',
		timestamp: 1467166872634,
		title: 'Uno'
	},
	{
		id: '6ni6ok3ym7mf1p33lnez',
		timestamp: 1488579767190,
		title: 'Due'
	}
]

let questions = [
	{
		id: 'xj352vofupe1dqz9emx13r',
		deckId: '8xf0y6ziyjabvozdd253nd',
		timestamp: 1493579767190,
		text: 'Chi è il più bello del mondo?',
		answer: 'Dino',
		correct: true
	}
]

export function _getDecks() {
	return new Promise((res, rej) => {
		setTimeout(() => res({...decks}), 1000)
	})
}

export function _getQuestions(deckId) {
	return new Promise((res, rej) => {
		setTimeout(() => res({...questions.filter(question => question.deckId === deckId)}), 1000)
	})
}

export function _saveDeck(title) {
	return new Promise((res, rej) => {
		console.log(title)
		const formattedDeck = formatDeck(title)

		setTimeout(() => {
			decks = {
				...decks,
				formattedDeck
			}

			res(formattedDeck)
		}, 1000)
	})
}

export function _saveQuestion(question) {
	return new Promise((res, rej) => {
		const formattedQuestion = formatQuestion(question)

		setTimeout(() => {
			question = {
				...question,
				formattedQuestion
			}

			res(formattedQuestion)
		}, 1000)
	})
}
