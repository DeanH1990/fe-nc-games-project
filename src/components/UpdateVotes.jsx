import { useState } from 'react';
import * as api from '../api';

const UpdateVotes = (props) => {
    let { review_id, votes } = props;
    const [error, setError] = useState(null)

    const [increaseisClicked, setIncreaseIsClicked] = useState(false);
    const [increaseVotes, setIncreaseVotes] = useState(0);

    const [decreaseisClicked, setdecreaseIsClicked] = useState(false);
    const [decreaseVotes, setDecreaseVotes] = useState(1);

    const handleIncreaseVotes = () => {
        setIncreaseVotes((curVotes) => curVotes + 1)
        setIncreaseIsClicked(true);
        setdecreaseIsClicked(false);
        api.updateReviewVotesById(review_id, 1).then((data) => {
        }).catch((err) => {
            setIncreaseIsClicked(false);
            setIncreaseVotes((curVotes) => curVotes - 1)
        })
    }

    const handleDecreaseVotes = () => {
        setDecreaseVotes((curVotes) => curVotes - 1)
        setdecreaseIsClicked(true);
        setIncreaseIsClicked(false);
        api.updateReviewVotesById(review_id, -1).then((data) => {
            console.log(data)
        }).catch((err) => {
            setdecreaseIsClicked(false);
            setDecreaseVotes((curVotes) => curVotes + 1)
        })
    }

    return <>
        <p>Votes: {votes } </p>
        <div className='vote-btn-container'>
            <button className='inc-vote-btn' disabled={increaseisClicked} onClick={handleIncreaseVotes}>{'\u{2B06}'}</button>
            <button className='inc-vote-btn' disabled={decreaseisClicked} onClick={handleDecreaseVotes}>{'\u{2B07}'}</button>
        </div>
    </>
}

export default UpdateVotes