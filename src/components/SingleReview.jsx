import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import * as api from '../api'
import SingleReviewComments from "./SingleReviewComments";

const SingleReview = () => {

    const { review_id } = useParams();

    
    const [review, setReview] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        api.getReviewById(review_id).then((singleReview) => {
            setReview(singleReview);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            setError(err);
        })
    }, [review_id])

    return isLoading ? <h2>Loading..</h2> :
    
        <section> 
            <div className="review-header">
                <h3>{review.title}</h3>
                <img src={review.review_img_url} />
            </div>
            <div className="review-main">
                <div className="review-main-header">
                    <h4>{review.owner}</h4>
                </div>
                <p>{review.review_body}</p>
                <p>Votes: {review.votes}</p>


            </div>
            <SingleReviewComments review_id={review_id} />
        </section>
    
}

export default SingleReview