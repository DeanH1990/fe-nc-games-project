import { useContext } from "react";
import { UserContext } from '../App';

const Homepage = () => {

    const user = useContext(UserContext);

    return <div className="homepage">
        <h2>Welcome {user} to NC Games</h2>
        <h3>For all your table top gaming desires!</h3>
        <img src="https://media.istockphoto.com/photos/miscellaneous-board-game-pieces-on-a-chess-board-picture-id619649940?k=20&m=619649940&s=612x612&w=0&h=jEQ1fudVcYI9z4jhAADgs_VnAQrnfLj_l0_I1_y6uAY=" alt="assorted board game pieces" />
    </div>
}

export default Homepage