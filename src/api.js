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