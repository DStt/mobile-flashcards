import {getQuestions, saveQuestion} from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

export function handleReceiveQuestions(deckId) {
	return (dispatch) => {
		return getQuestions(deckId).then(
			questions => dispatch(receiveQuestions(questions))
		)
	}
}

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	}
}

export function handleAddQuestion(question, cb) {
	return (dispatch) => {
		return saveQuestion(question).then(
			(question) => dispatch(addQuestion(question))
		).then(result => cb(result.question)
		).catch(err => {
			console.log(err)
			alert('An error occurred. Please try again later')
		})
	}
}
