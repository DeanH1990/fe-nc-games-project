import ReviewList from "./ReviewList";
import Categories from "./Categories";
import { useState } from 'react';

const Reviews = () => {

    const [reviews, setReviews] = useState(null);
    const [categories, setCategories] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState("")

    return <div>
        <Categories categories={categories} setCategories={setCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <ReviewList reviews={reviews} setReviews={setReviews} selectedCategory={selectedCategory} />
    </div>
}

export default Reviews