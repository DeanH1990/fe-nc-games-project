import ReviewList from "./ReviewList";
import { useState } from 'react';
import Categories from "./Categories";

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const [categories, setCategories] = useState(null)

    return <div>
        <Categories categories={categories} setCategories={setCategories} />
        <ReviewList reviews={reviews} setReviews={setReviews} />
    </div>
}

export default Reviews