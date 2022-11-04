import { useState, useEffect } from "react";
import * as api from '../api';
import FilterCategories from './FilterCategories'

const Categories = (props) => {
  
    const {categories, setCategories, setSelectedCategory, setOrder, setSelectedSortBy} = props;

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.getCategories().then(( allCategories ) => {
            setCategories(allCategories);
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            setError(err)
        })
    }, [])

    return isLoading ? <h2>Loading..</h2> :
        <div>
            <FilterCategories categories={categories} setSelectedCategory={setSelectedCategory} setSelectedSortBy={setSelectedSortBy} setOrder={setOrder} />
        </div>
    
}

export default Categories