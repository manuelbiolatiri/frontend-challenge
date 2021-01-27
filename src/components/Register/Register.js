import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInfirstName: '',
      signInlastName: '',
      errorMessage: '',
      successMessage: '',
      visible: true,
      loading: false,
    };
  }

  hideLoader = () => {
    this.setState({ loading: false });
  };

  showLoader = () => {
    this.setState({ loading: true });
  };

  onfirstNameChange = (event) => {
    this.setState({ signInfirstName: event.target.value });
  };

  onlastNameChange = (event) => {
    this.setState({ signInlastName: event.target.value });
  };

  onSubmitSignIn = () => {
    this.showLoader();
    try {
      fetch('http://localhost:5000/api/users/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'manuel',
          username: 'manuel',
          password: 'manuel123',
          password2: 'manuel123',
          // type: 'consumer'
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          console.log(user);
          if (user.status === 'error') {
            this.hideLoader();
          } else if (user.success === true) {
            localStorage.setItem('currentUser', JSON.stringify(user.user._id));

            this.props.history.push(`/signin`);
            this.hideLoader();
            //   // this.props.onRouteChange('home')
          }
        });
    } catch (e) {}
  };

  onDismiss = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div className='container' style={{ margin: 'auto' }}>
        <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6  bg-white shadow-5 center'>
          <main className='pa4 black-80'>
            <div className='measure'>
              <fieldset id='sign_in' className='ba b--transparent ph0 mh0'>
                <legend className='f1 fw6 ph0 mh0'>Login</legend>
                <div className='mt3'>
                  <label className='db fw6 lh-copy f6' htmlFor='firstName'>
                    firstName
                  </label>
                  <input
                    className='pa2 input-reset ba bg-transparent   w-100'
                    type='text'
                    name='firstName'
                    id='firstName'
                    placeholder='firstName'
                    onChange={this.onfirstNameChange}
                  />
                </div>
                <div className='mv3'>
                  <label className='db fw6 lh-copy f6' htmlFor='lastName'>
                    lastName
                  </label>
                  <input
                    className='b pa2 input-reset ba bg-transparent   w-100'
                    type='lastName'
                    name='lastName'
                    id='lastName'
                    placeholder='lastName'
                    onChange={this.onlastNameChange}
                  />
                </div>
              </fieldset>
              <div className=''>
                <button
                  onClick={this.onSubmitSignIn}
                  className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                >
                  {this.state.loading ? `loading...` : `Sign in`}
                </button>
              </div>
              <div className='lh-copy mt3'>
                <Link to='/signin'>
                  <p className=''>Not registered yet? Create an account</p>
                </Link>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default Register;
