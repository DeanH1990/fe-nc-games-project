import Nav from './Nav';

const Header = () => {
    return <div className="App-header">
                <div className='nav-container'>
                    <Nav /> 
                </div>
                <div className='title-container'>
                    <h1>NC Games</h1> 
                </div>
            </div>
}

export default Header