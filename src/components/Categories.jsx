import { useState, useEffect } from "react";
import * as api from '../api';

const Categories = (props) => {
    const {categories, setCategories} = props;
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
    }, [setCategories])

    return isLoading ? <h2>Loading..</h2> :
    <section>
        <form action="filter-category">
            <label htmlFor="search-term">Filter by category</label>
            <select name="category_name" id="filters">
                <option value="default" ></option>

                {categories.map((category, index) => {
                    return <option key={index} value={category.slug}>{category.slug}</option>
                })}
            </select>
        </form>
    </section>
}

export default Categories