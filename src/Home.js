import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const gotoQuestions = () => {
        navigate('/questions')
    }
    return (
        <>
            <div>
                <h1 align='center'>Online Assignment</h1>
            </div>
            <div className="start_button">
                <button className="start_button_1" onClick={gotoQuestions}>Start assignment</button>
            </div>
        </>
    )
}
export default Home;