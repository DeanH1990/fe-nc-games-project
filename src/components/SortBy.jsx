import { useNavigate } from "react-router-dom";

const SortBy = (props) => {
    const { setSelectedSortBy, setOrder } = props;

    const navigate = useNavigate();

    const sortByOptions = ["created_at", "comment_count", "votes", "title", "designer", "owner", "category"];

    let navStr = ""

    const handleSortBy = (event) => {
        const sortBy = event.target.value;
        if (sortBy) {
            setSelectedSortBy(sortBy)
            navStr += `?sort_by=${sortBy}`
            navigate(navStr)  
        } else {
            setSelectedSortBy(sortBy)
        }
    }

    const handleOrderBy = (event) => {
        const newOrder = event.target.value;
        setOrder(newOrder);
    }


    return <section className="sort-reviews-header">
    <form action="sort-reviews">
        <label htmlFor="search-term">Sort by</label>
        <br /><select name="sort_by" id="filters" onChange={handleSortBy}>
            <option value="" ></option>

            {sortByOptions.map((option, index) => {
                return <option key={index} value={option} >{option}</option>
            })}
        </select><br />
    </form>
    <form>
        <label htmlFor="order">Order</label>
        <br /><select name="order" id="order" onChange={handleOrderBy}>
          <option value="" ></option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
    </form>
</section>
}

export default SortBy