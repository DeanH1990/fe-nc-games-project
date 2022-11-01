

const FilterCategories = (props) => {

    const {categories, setSelectedCategory} = props;


    const handleChange = (event) => {
        setSelectedCategory(event.target.value)
    }

    return <section>
    <form action="filter-category">
        <label htmlFor="search-term">Filter by category</label>
        <select name="category_name" id="filters" onChange={handleChange}>
            <option value="" ></option>

            {categories.map((category, index) => {
                return <option key={index} value={category.slug} >{category.slug}</option>
            })}
        </select>
    </form>
</section>

}

export default FilterCategories