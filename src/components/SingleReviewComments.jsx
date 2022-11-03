import { useEffect, useState } from "react";
import * as api from '../api';
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const SingleReviewComments = (props) => {
    const { review_id } = props;

    const [comments, setComments] = useState(null);
    const [isLoading, setIsLoading]= useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.getCommentsByReviewId(review_id).then((relatedComments) => {
            // console.log(relatedComments)
            setComments(relatedComments);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            setError(err);
        })
    }, [review_id])

    return isLoading ? <h3>Loading..</h3> :
        <section>
            {comments.map((comment) => {
               return <div className="individual-comment">
                    <div className="comment-header">
                        <h4>{comment.author}</h4>
                        <h4>{dayjs(comment.created_at).fromNow()}</h4>
                    </div>
                    
                </div>
            })}
        </section>
}

export default SingleReviewComments