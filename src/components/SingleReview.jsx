import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import * as api from '../api'

const SingleReview = () => {

    const { review_id } = useParams();

    const [review, setReview] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setIsLoading(true);
        api.getReviewById(review_id).then((singleReview) => {
            setReview(singleReview);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            setError(err);
        })
    }, [])

    return isLoading ? <h2>Loading..</h2> :
    
        <section>
            {review.review_id} 
            {review.title}
        </section>
    
}

export default SingleReview