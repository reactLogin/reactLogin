import React, {PropTypes} from 'react';
import GoogleLogin from './common/GoogleLogin';

class App extends React.Component {

    render() {
        return (
            <div>
                <p>React Login App</p>
                <GoogleLogin />
                {this.props.children}
            </div>
        )
    }
}
App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;