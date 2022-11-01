import { useState, useEffect } from "react";
import * as api from '../api';
import FilterCategories from './FilterCategories'

const Categories = (props) => {
  
    const {categories, setCategories, setSelectedCategory} = props;

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
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
            <FilterCategories categories={categories} setSelectedCategory={setSelectedCategory} />
        </div>
    
}

export default Categories