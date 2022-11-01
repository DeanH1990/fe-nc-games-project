import ReviewList from "./ReviewList";
import Categories from "./Categories";
import { useState } from 'react';

const Reviews = (params) => {

    const {id, setId} = params

    const [reviews, setReviews] = useState(null);
    const [categories, setCategories] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState("")

    console.log(selectedCategory)

    return <div>
        <Categories categories={categories} setCategories={setCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <ReviewList reviews={reviews} setReviews={setReviews} selectedCategory={selectedCategory} id={id} setId={setId} />
    </div>
}

export default Reviews