import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  onChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span> Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.onChange}
            name="email"
            type="email"
            value={email}
            required
            label="email"
          />
          <FormInput
            handleChange={this.onChange}
            name="password"
            type="password"
            value={password}
            required
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton type="button" isGoogle onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
