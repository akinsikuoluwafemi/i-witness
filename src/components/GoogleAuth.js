import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import history from '../history';

class GoogleAuth extends React.Component{
    constructor(props){
       super(props) 
    }
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '842780910718-dc1u7uf1et4u8a4bnutkjgk37cbk0b3e.apps.googleusercontent.com',
                scope: 'email'
                
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
            console.log(this.props)
            // history.push('/home');



        }else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();

        console.log(this.props)
        history.push('/home');

    }

    onSignOutClick = () => {
        this.auth.signOut();
        console.log(this.props)

    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            
            return null;
        }else if(this.props.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    {this.props.text} With Google
                </button>
            )
        }else {
            return (
                <button onClick={this.onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    {this.props.text} With Google
                </button>
            )
            
        }

    }


    render(){
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isSignedIn: state.auth.isSignedIn
    }

}

export default connect(mapStateToProps, {signIn,signOut})(GoogleAuth);


