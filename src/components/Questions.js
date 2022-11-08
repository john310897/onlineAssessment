import { useEffect, useState } from 'react';
import * as questionData from '../data/questions';
import { useSelector, useDispatch } from 'react-redux'
import { storeValue } from '../app_state/QuestionReducer';
import { useNavigate } from 'react-router-dom';
const Questions = () => {
    const dispatch = useDispatch();
    const state = useSelector((c) => c.question)
    const [activeQuestion, setActiveQuestion] = useState({});
    const [countData, setCountData] = useState({ count: 0 })
    const navigate = useNavigate();

    useEffect(() => {
        setQuestion()
    }, [])

    const setQuestion = () => {
        console.log("questions", state)
        let data = questionData.questions[countData.count]
        setActiveQuestion(data)
    }

    const gotoNextQuestion = (item, index) => {
        let cd = countData.count + 1
        let updated = { ...state.questionData, ...{ [item.name]: index + 1 } }
        dispatch(storeValue(updated))
        if (cd < questionData.questions.length) {
            countData.count = cd
            setCountData({ ...countData, count: cd })
            setQuestion()
        } else {
            navigate('/result')
        }
    }
    const gotoPrevQuestion = () => {
        let cd = countData.count - 1
        if (cd >= 0) {
            setCountData({ ...countData, count: cd })
            setQuestion()
        }
    }

    return (
        <>
            <h4>{countData.count + 1 + '/' + String(questionData.questions.length)}</h4>
            <div className="questions">
                {activeQuestion?.type === 'image_question' &&
                    <div className="questions_image">
                        <img src={activeQuestion?.question_image} className='questions_images' width='auto' height='100px' />
                    </div>
                }
                <div className="questions_question">
                    <h3>{countData.count + 1 + ") "}{activeQuestion?.question_label}</h3>
                </div>
                <div className="questions_options">
                    {activeQuestion?.options?.map((option, index) => (
                        <section key={index + 1}>
                            {activeQuestion?.type === 'image_question' ?
                                (<>
                                    <img src={option} alt='loading' className='option_image' width='auto' height='100px' onClick={() => gotoNextQuestion(activeQuestion, index)} /> &nbsp;&nbsp;
                                </>)
                                : (<label className='option_option' onClick={() => gotoNextQuestion(activeQuestion, option)}> <b>{option}</b></label>)}
                        </section>
                    ))}
                </div>
                <br /><br />
                <div className='prev_button'>
                    {countData.count > 0 &&
                        <button className='bacK_button' onClick={gotoPrevQuestion}>Back</button>
                    }
                </div>
            </div>
        </>
    )
}
export default Questions