import React from 'react';

class Login extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({...this.state, ...{[e.target.name]: e.target.value}})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    localStorage.token = true
    this.props.history.push("/")
  }

  render() {
    return(
      <div>
        Login
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}/>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Login;
