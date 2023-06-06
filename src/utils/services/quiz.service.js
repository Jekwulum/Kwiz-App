import { instance as Axios } from "./axios.service";

const QuizService = {
	cretaeQuiz(payload) {
		return Axios({
			method: 'POST',
			url: '/quiz/',
			data: payload
		})
	},

	getQuestionsByUserId(userId) {
		return Axios({
			method: 'GET',
			url: `/quiz/fetch-by-userId/${userId}`
		})
	},

	getQuestionsByQuizId(quizId) {
		return Axios({
			method: 'GET',
			url: `/quiz/fetch-by-quizId/${quizId}`
		})
	},

	getQuestionByCode(questionId) {
		return Axios({
			method: 'GET',
			url: `/quiz/${questionId}`
		})
	},

	getPlayerByQuizIDAndPlayerID(quizId, playerId) {
		return Axios({
			method: 'GET',
			url: `/quiz/player/${quizId}/${playerId}`
		})
	},

	addPlayer(quizId, payload) {
		return Axios({
			method: 'POST',
			url: `/quiz/player/${quizId}`,
			data: payload
		})
	},

	updatePlayerScore(quizId, playerId, payload) {
		return Axios({
			method: 'PATCH',
			url: `quiz/player/update-score/${playerId}/${quizId}`,
			data: payload
		})
	}
};

export default QuizService;