import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInwithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          email: '',
          password: ''  
         }
    }
handelSubmit = async event =>{
    event.preventDefault();
    const {email,password} = this.state;

try{
await auth.signInWithEmailAndPassword(email,password);
this.setState({email:'' , password:''});
}catch(error){
  console.log(error);

}

    this.setState({email: '', password:''})
}

  handelChange = event =>{
      const {value, name} = event.target;
      this.setState({[name]:value})
  }

    render() { 
        return (
            
            <div className="sign-in">
              <h2>I already have an account</h2>
              <span>Sign-in with your email and password</span>
              <form onSubmit={this.handelSubmit}>
                  <FormInput
                    type="email"
                    name="email" 
                    value={this.state.email}
                    label="email"
                    handelChange={this.handelChange}
                    required/>
                  
                  <FormInput
                   type="password"
                   name="password"
                   value={this.state.password}
                   label="password"
                   handelChange={this.handelChange}
                   required/>
                  <div className="bottons">
                     <CustomButton type="submit" >Sign In</CustomButton>
                  <CustomButton onClick= {signInwithGoogle} isGoogleSignIn >
                  Sign In with Google</CustomButton>
                  </div>
                 
              </form>
            </div>
          );
    }
}
 
export default SignIn;