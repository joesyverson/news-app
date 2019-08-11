import React from 'react';

class Login extends React.Component {

  state = {
    name: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({...this.state, ...{[e.target.name]: e.target.value}})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data =>{
      if (data.token)  {
        localStorage.token = data.token
        this.props.history.push('/')
      }
    })
  }

  render() {
    return(
      <div>
        Login
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            name="name"
            placeholder="username"
            value={this.state.name}
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
