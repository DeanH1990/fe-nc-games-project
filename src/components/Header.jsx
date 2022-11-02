import { useState } from 'react';
import Nav from './Nav';
import NavOption from './NavOption';

const Header = () => {

    const navOptions = [{"Home": "/"}, {"Reviews": "/reviews"}]
    const [isClosed, setIsClosed] = useState(true);
    
    return <div className="App-header">
                <div className='nav-container'>
                    <Nav isClosed={isClosed} setIsClosed={setIsClosed} >
                        {navOptions.map((option, index) => {
                            return <NavOption key={index} optionValue={option} setIsClosed={setIsClosed} />
                        })}
                    </Nav> 
                </div>
                <div className='title-container'>
                    <h1>NC Games</h1> 
                </div>
            </div>
}

export default Header