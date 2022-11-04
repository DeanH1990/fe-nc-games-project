import {  useState } from "react";
import * as api from '../api';

const DeleteComment = (props) => {
    const { comment_id, author, user, setIsDeleted } = props;

    const [ isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleClick = () => {
        setIsLoading(true);
        api.deleteCommentById(comment_id).then((response) => {
            response.status !== 204 ? setError("Something wrong, please try again") 
            : setIsLoading(false) 
            setIsDeleted(true)
        })
        setIsDeleted(false)
    }


    return error ? {error} :
        isLoading ? <h3>Deleting..</h3> :
        <div>
            <button onClick={handleClick} >Delete</button>
        </div>

}

export default DeleteComment