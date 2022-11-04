import ReviewList from "./ReviewList";
import Categories from "./Categories";
import SortBy from "./SortBy";
import { useState } from 'react';
import { useParams } from "react-router-dom";

const Reviews = () => {

    const {category} = useParams();
  
    const [reviews, setReviews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [selectedSortBy, setSelectedSortBy] = useState("");
    const [order, setOrder] = useState("");





    return <div>
        <div className="filter-and-sort">
            <SortBy setSelectedSortBy={setSelectedSortBy} setOrder={setOrder} />
            <Categories categories={categories} setCategories={setCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setOrder={setOrder} setSelectedSortBy={setSelectedSortBy}   />
        </div>
        <ReviewList reviews={reviews} setReviews={setReviews} selectedCategory={selectedCategory} selectedSortBy={selectedSortBy} order={order}/>
    </div>
}

export default Reviews