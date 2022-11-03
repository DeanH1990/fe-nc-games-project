import { useContext, useEffect, useState } from "react";
import { UserContext } from '../App';
import * as api from '../api';

const PostComment = (props) => {
    const { review_id, setNewComment } = props;

    const user = useContext(UserContext);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [comment, setComment] = useState("");
    const [succeed, setSucceed] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        api.postCommentByReviewId(review_id, user, comment).then((response) => {
            console.log(response)
            setIsLoading(false);
            setNewComment(comment);
            setSucceed(true);
            return response
        }).catch((err) => {
            setIsLoading(false);
            setError(err)
        })
    }

    const handleChange = (event) => {
        setComment(event.target.value)
    }

    const retry = () => {
        setError(null);
        setIsLoading(false);
        setSucceed(false)

    }

    return isLoading ? <h3>Loading..</h3> :
        error ? <div>
                <p>{error.response.data.msg}</p> 
                <button onClick={retry}>Retry</button>
            </div>  :
        succeed ? <div>
                <h3>Success!</h3>
                <button onClick={retry}>Post again</button>
            </div> :
        <form className="submit-comment-form" action="add-new-comment" onSubmit={handleSubmit}>
        <fieldset>
            <legend>Add a comment!</legend>
            <label htmlFor="user">Commenting as: <strong>{user}</strong></label>
            <br></br><label htmlFor="comment">Comment </label>
            <input type="text" id="comment" onChange={handleChange} required/>
            <button type="Submit" >Submit</button>
        </fieldset>

    </form>
}

export default PostComment