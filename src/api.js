import axios from "axios";

const myApi = axios.create({
    baseURL: 'https://dean-hasley-nc-games.cyclic.app/api'
});


export const getReviews = (category, sort_by, order) => {
    const params = {category, sort_by, order}
    return myApi.get(`/reviews`, {params: params}).then((response) => {
        return response.data.reviews
        })
}

export const getCategories = () => {
    return myApi.get('/categories').then((response) => {
        return response.data.categories;
    })
}

export const getReviewById = (review_id) => {
    return myApi.get(`/reviews/${review_id}`).then((response) => {
        return response.data.review;
    })
}

export const updateReviewVotesById = (review_id, number) => {
    const voteUpdate = {inc_votes: number};
    return myApi.patch(`/reviews/${review_id}`, voteUpdate).then((response) => {
        return response.data.review;
    })
}

export const getCommentsByReviewId = (review_id) => {
    return myApi.get(`/reviews/${review_id}/comments`).then((response) => {
        return response.data.comments;
    })
}

export const postCommentByReviewId = (review_id, user, comment) => {
    const newComment = { 
        username: user,
        body: comment
    };
    return myApi.post(`/reviews/${review_id}/comments`, newComment).then((response) => {
        return response;
    })
}

export const deleteCommentById = (comment_id) => {
    return myApi.delete(`/comments/${comment_id}`).then((response) => {
        return response;
    })
}