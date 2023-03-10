import { instance as Axios } from "./axios.service";

const QuizService = {
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
	}
};

export default QuizService;