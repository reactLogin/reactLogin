import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>React Login Page</h1>
                <Link to="about">About</Link>
            </div>
        )
    }
}

export default HomePage;