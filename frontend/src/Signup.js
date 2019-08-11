import React from 'react';

class Signup extends React.Component {

  state = {
    username: "",
    password: "",
    age: 0,
    location: "",
    email: ""
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
        Signup
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
        <input
          type="number"
          name="age"
          placeholder="age"
          value={this.state.age}
          onChange={(e) => this.handleChange(e)}/>
        <input
          type="text"
          name="location"
          placeholder="location"
          value={this.state.location}
          onChange={(e) => this.handleChange(e)}/>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={(e) => this.handleChange(e)}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Signup;
