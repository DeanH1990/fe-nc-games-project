import ReviewCards from './ReviewCards'
import { useEffect, useState } from 'react';
import * as api from '../api';


const ReviewList = (props) => {
    const {reviews, setReviews, selectedCategory, selectedSortBy, order } = props
    
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.getReviews(selectedSortBy, order).then(( allReviews ) => {
            setReviews(allReviews);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            setError(err)
        })
    }, [selectedSortBy, order])

    return isLoading ? <></> :
    
    <section>
        {reviews
        .filter((remainingCat) => {
            if (selectedCategory === "") {
                return remainingCat;
            } else {
                return remainingCat.category === selectedCategory;
            }
        })
        .map(({ review_id, title, category, designer, owner, review_body, review_img_url, created_at, votes, comment_count }) => {
            return (
                <ReviewCards 
                    key={review_id}
                    review_id={review_id}
                    title={title}
                    category={category}
                    designer={designer}
                    owner={owner}
                    review_body={review_body}
                    img_url={review_img_url}
                    posted_on={created_at}
                    score={votes}
                    comment_count={comment_count}
                />
            );
        })}
        
    </section>

}

export default ReviewList