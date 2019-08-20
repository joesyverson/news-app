import React from 'react';

class Signup extends React.Component {


  state = {
    name: "",
    password: "",
    age: 0,
    location: "",
    email: "",
    showForm: false
  }

  handleChange = (e) => {
    this.setState({...this.state, ...{[e.target.name]: e.target.value}})
  }

  handleSubmit = (e) => {

    e.preventDefault()
    if(this.state.name && this.state.password && this.state.location && this.state.email && this.state.age) {
      fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json'
        },
        body: JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then(json =>{
        if (json.token)  {
          localStorage.token = json.token
          this.props.showError("")
          this.props.getProfile()
          this.props.history.push('/')
        } else {
          // debugger
          this.props.showError("Usernames and emails must be unique")
        }
      })
    } else {
        this.props.showError('All fields must be complete in order to register.')
    }

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
            <input type="submit" className="button" value="SIGNUP"/>
        </form>
    )
  }

  render() {
    return(
      <React.Fragment>
        <button className="flex-column" onClick={() => this.setState({showForm: !this.state.showForm})}>SIGNUP</button>
        <br/>
        <br/>
        {this.state.showForm ? this.showForm() : null}
      </React.Fragment>
    )
  }
}

export default Signup;
