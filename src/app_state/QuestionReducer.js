import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    questionData: {}
}
export const QuestionReducer = createSlice({
    name: 'questionData',
    initialState,
    reducers: {
        storeValue(state, action) {
            let data = action.payload
            state.questionData = data
        }
    },
})
export const { storeValue } = QuestionReducer.actions;
export default QuestionReducer.reducer;