import { Link } from "react-router-dom"

const ReviewCards = (props) => {
    const { 
        review_id, 
        title, 
        category, 
        designer, 
        owner,  
        img_url, 
        posted_on, 
        score, 
        comment_count, 
    } = props

    return <article className="review-card-container">
        <div className="individual-review-cards" >
            <p>{posted_on.slice(0, 10)}</p>
            <Link to={`/reviews/${review_id}`}>
                <h3 >{title}</h3>
            </Link>
            <div className="review-card-info">
                <section className="review-card-category"><h4>Category</h4>{category}</section>
                <section className="review-card-designer"><h4>Designer</h4>{designer}</section>
            </div>
                <p>{owner}</p>
            <img src={img_url} alt={title} />
            <div className="bottom-of-card">
                <p>Comments: {comment_count}</p>
                <p>Votes: {score}</p>
            </div>
        </div>
    </article>
}

export default ReviewCards