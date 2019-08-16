import React from 'react';

class Login extends React.Component {

  state = {
    name: "",
    password: "",
    showForm: false
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
          this.props.getProfile()
          this.props.history.push('/')
        }
    })
  }

  renderForm = () => {
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
      <input type="submit"/>
      </form>
    )
  }

  render() {
    return(
      <div>
        <span onClick={() => this.setState({showForm: !this.state.showForm})}>Login</span>
        {this.state.showForm ? this.renderForm() : null}
      </div>
    );
  }
}

export default Login;
