import { useState, useEffect } from "react";
import * as api from '../api';
import FilterCategories from './FilterCategories'

const Categories = (props) => {
  
    const {categories, setCategories, setSelectedCategory, setOrder, setSelectedSortBy} = props;

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.getCategories().then(( allCategories ) => {
            setCategories(allCategories);
            setIsLoading(false);
        })
    }, [])

    return isLoading ? <h2>Loading..</h2> :
        <div>
            <FilterCategories categories={categories} setSelectedCategory={setSelectedCategory} setSelectedSortBy={setSelectedSortBy} setOrder={setOrder} />
        </div>
    
}

export default Categories