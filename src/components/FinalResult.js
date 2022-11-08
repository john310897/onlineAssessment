import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as questionData from "../data/questions";
const FinalResult = () => {
    const state = useSelector(state => state.question.questionData)
    const [correctAnswers, setCorrectAnswers] = useState();
    useEffect(() => {
        calculate()
    }, [])

    const calculate = () => {
        let total = 0
        questionData.questions.forEach(item => {
            if (item?.correct === state[item.name]) {
                total += 1
            }
        })
        setCorrectAnswers(total)
    }
    return (
        <div className="result_section">
            <h2>Your result:</h2>
            <p>Your IQ is {parseInt((correctAnswers / (Object.keys(state)?.length)) * 100)}. This corresponds to a below average level IQ. In this test you have {correctAnswers} correct answers from {Object.keys(state)?.length}. This is not a very good result for your age {state?.q5}.</p>
            <p>Please note that the first four questions of the test were only the practice questions and they do not count towards the final result</p>
        </div>
    )
}
export default FinalResult;