import { useNavigate } from "react-router-dom";

const FilterCategories = (props) => {
    const {categories, setSelectedCategory} = props;

    const navigate = useNavigate();

    const handleChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category)
        category === "" ? navigate("") : navigate(`?category_name=${category}`)
        
    }

    return <section>
    <form action="filter-category">
        <label htmlFor="search-term">Filter by category</label>
        <br /><select name="category_name" id="filters" onChange={handleChange}>
            <option value="" ></option>

            {categories.map((category, index) => {
                return <option key={index} value={category.slug} >{category.slug}</option>
            })}
        </select>
    </form>
</section>

}

export default FilterCategories