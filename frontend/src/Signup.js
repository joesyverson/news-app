import React from 'react';

class Signup extends React.Component {


  state = {
    name: "",
    password: "",
    age: 0,
    location_id: 0,
    email: "",
    showForm: false
  }

  handleChange = (e) => {
    this.setState({...this.state, ...{[e.target.name]: e.target.value}})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/users/signup', {
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

  showForm = () => {
    return(
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
      <input
      type="number"
      name="age"
      placeholder="age"
      value={this.state.age}
      onChange={(e) => this.handleChange(e)}/>
      <input
      type="number"
      name="location_id"
      placeholder="location"
      value={this.state.location_id}
      onChange={(e) => this.handleChange(e)}/>
      <input
      type="email"
      name="email"
      placeholder="email"
      value={this.state.email}
      onChange={(e) => this.handleChange(e)}/>
      <input type="submit"/>
      </form>
    )
  }

  render() {
    return(
      <div>
        <span onClick={() => this.setState({showForm: !this.state.showForm})}>Signup</span>
        {this.state.showForm ? this.showForm() : null}
      </div>
    )
  }
}

export default Signup;
