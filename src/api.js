import axios from "axios";

const myApi = axios.create({
    baseURL: 'https://dh-nc-games.herokuapp.com/api'
});

export const getReviews = () => {
    return myApi.get('/reviews').then((response) => {
        return response.data.reviews
    })
}

export const getCategories = () => {
    return myApi.get('/categories').then((response) => {
        return response.data.categories
    })
}

export const getReviewById = (review_id) => {
    return myApi.get(`/reviews/${review_id}`).then((response) => {
        return response.data.review
    })
}

export const getCommentsByReviewId = (review_id) => {
    return myApi.get(`/reviews/${review_id}/comments`).then((response) => {
        return response.data.comments
    })
}