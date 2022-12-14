import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import * as api from '../api'
import SingleReviewComments from "./SingleReviewComments";
import ErrorPage from "./ErrorPage";
import UpdateVotes from "./UpdateVotes";

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
            error ?   <h3> <ErrorPage message={error.response} /> </h3> :
    
        <section> 
            <div className="single-review-container">
                <div className="review-header">
                    <h3>{review.title}</h3>
                    <img src={review.review_img_url} alt="the game"/>
                </div>
                <div className="review-main">
                    <div className="review-main-header">
                        <h4>{review.owner}</h4>
                    </div>
                    <p>{review.review_body}</p>
                    
                    <UpdateVotes review_id={review.review_id} votes={review.votes}/>
                </div>
            </div>
            <SingleReviewComments review_id={review_id} />
        </section>
    
}

export default SingleReview