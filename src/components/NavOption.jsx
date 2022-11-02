import { Link } from "react-router-dom";

const NavOption = (props) => {
    const {optionValue, setIsClosed} = props;

    console.log(Object.values(optionValue))
    return <Link to={Object.values(optionValue).toString()} onClick={() => {setIsClosed(true)}}>
                <li className="nav-list" >
                {Object.keys(optionValue)}
                </li>
            </Link>
}

export default NavOption