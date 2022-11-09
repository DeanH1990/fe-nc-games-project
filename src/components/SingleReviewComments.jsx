import { useContext, useEffect, useState } from "react";
import * as api from '../api';
import PostComment from "./PostComment";
import DeleteComment from "./DeleteComment";
import { UserContext } from '../App';
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const SingleReviewComments = (props) => {
    const { review_id } = props;

    const user = useContext(UserContext);

    const [comments, setComments] = useState(null);
    const [isLoading, setIsLoading]= useState(true);
    const [error, setError] = useState(null);
    const [newComment, setNewComment] = useState("");
    const [isDeleted, setIsDeleted] = useState(false)

    useEffect(() => {
        api.getCommentsByReviewId(review_id).then((relatedComments) => {
            setComments(relatedComments);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            setError(err);
        })
    }, [review_id, newComment, isDeleted])

    return isLoading ? <h3>Loading..</h3> :
        error ? <h3>Something went wrong, please try again</h3> :
        <section className="single-review-comments-section">
            <PostComment review_id={review_id} setNewComment={setNewComment} user={user}/>
            {comments.map((comment, index) => {
               return <div className="individual-comment" key={index}>
                    <div className="comment-header">
                        <h4>{comment.author}</h4>
                        <h4>{dayjs(comment.created_at).fromNow()}</h4>
                    </div>
                    <div className="comment-body">
                        <p>{comment.body}</p>
                    </div>
                     {user === comment.author ? <DeleteComment comment_id={comment.comment_id} author={comment.author} user={user} setIsDeleted={setIsDeleted} /> : <></>} 
                </div>
            })}
        </section>
}

export default SingleReviewComments