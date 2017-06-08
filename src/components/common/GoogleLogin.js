import React, {PropTypes} from 'react';
import GoogleLogin from 'react-google-login';

class LoginButton extends React.Component {

   constructor(...args){
        super(...args)
        this.success = this.success.bind(this);
        this.failure = this.failure.bind(this);
   }

        success(response) {
            alert('Login Success', response);
        }

        failure(response) {
            alert('Login Failure', response);
        }

    render() {
        return (
            <div>
                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.success}
                    onFailure={this.failure}
                    offline="true"
                  />
            </div>
        )
    }
}

export default LoginButton;