import axios from "axios";

export const getReviews = () => {
    return axios.get('https://dh-nc-games.herokuapp.com/api/reviews').then((response) => {
        return response.data.reviews
    })
}