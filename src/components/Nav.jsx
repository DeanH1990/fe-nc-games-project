const Nav = (props) => {

    const { children, isClosed, setIsClosed } = props;
    
    if (isClosed) {
        return <div className="nav-img-container" onClick={() => {setIsClosed(false)}}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    } else {
        return <ul>
            <li className="nav-list" onClick={() => {setIsClosed(true)}}>X</li>
            {children}
        </ul>
    }
}

export default Nav