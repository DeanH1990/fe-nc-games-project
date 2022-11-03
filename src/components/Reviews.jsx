import ReviewList from "./ReviewList";
import Categories from "./Categories";
import SortBy from "./SortBy";
import { useState } from 'react';

const Reviews = () => {

    const [reviews, setReviews] = useState(null);
    const [categories, setCategories] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSortBy, setSelectedSortBy] = useState("");
    const [order, setOrder] = useState("");


    return <div>
        <div className="filter-and-sort">
            <SortBy setSelectedSortBy={setSelectedSortBy} setOrder={setOrder} selectedCategory={selectedCategory} />
            <Categories categories={categories} setCategories={setCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}  />
        </div>
        <ReviewList reviews={reviews} setReviews={setReviews} selectedCategory={selectedCategory} selectedSortBy={selectedSortBy} order={order}/>
    </div>
}

export default Reviews