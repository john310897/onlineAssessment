import { configureStore } from '@reduxjs/toolkit'
import QuestionReducer from './QuestionReducer'
export const store = configureStore({
    reducer: {
        question: QuestionReducer
    },
})
export default store;