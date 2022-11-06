import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    questionData: []
}
export const QuestionReducer = createSlice({
    name: 'questionData',
    initialState,
    reducers: {
        storeValue(state, action) {
            state.questionData.push(action.payload)
        }
    },
})
export const { storeValue } = QuestionReducer.actions;
export default QuestionReducer.reducer;