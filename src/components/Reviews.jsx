import ReviewList from "./ReviewList";
import Categories from "./Categories";
import { useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const [categories, setCategories] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)

    return <div>
        <Categories categories={categories} setCategories={setCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <ReviewList reviews={reviews} setReviews={setReviews} />
    </div>
}

export default Reviews