import { useEffect, useState } from "react"
import * as api from '../api'

const SingleReview = (params) => {

    const { id } = params;

    const [review, setReview] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setIsLoading(true);
        api.getReviewById(id).then((singleReview) => {
            console.log(singleReview)
            setReview(singleReview);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            setError(err);
        })
    }, [])

    console.log(review)
    return isLoading ? <h2>Loading..</h2> :
    
        <section>
            {review.review_id} 
            {review.title}
        </section>
    
}

export default SingleReview