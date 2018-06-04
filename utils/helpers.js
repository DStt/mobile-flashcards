export function formatQuestion({deckId, text, answer, correct}) {
	return {
		id: generateUID(),
		timestamp: Date.now(),
		deckId,
		text,
		answer,
		correct
	}
}

export function formatDeck(title) {
	return {
		id: generateUID(),
		title: title
	}
}

export function generateUID() {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}