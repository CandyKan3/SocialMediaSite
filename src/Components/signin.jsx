import React, {Component} from 'react';
import Nav from './nav';
import Fade from 'react-reveal/Fade'
import style from './home.css';
import Cookies from 'js-cookie';
import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';

export default class Login extends Component {

    constructor (props){
        super(props);
      
        this.state = {
            email: "",
            password: "",
            address: "",
            email2: "",
            password2: "",
            createuser: false,
            Redirect: false,
            success: true,
            alert: <h1></h1>,
            inline: "hidden",
            outline: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center",
            username: Cookies.get('Address'),
            location: "/user"
    
          };
      
      
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createUser = this.createUser.bind(this);
        this.setRedirect = this.setRedirect.bind(this);

    
      
      }

      setRedirect(){
 
           this.setState({Redirect: true});
           const cookies = new Cookies();
        Cookies.set('Registered', 'true', { path: '/' });
        console.log(Cookies.get('Registered'));
      

    }
      createUser(){
          this.setState({ success: !this.state.success });
            this.setState({outline: this.state.inline});

      }

      handleSubmit(event) {
        event.preventDefault();
            if(this.state.password == this.state.password2){
        console.log("HERE");
          event.preventDefault();
          const data ={"email": this.state.email, "password": this.state.password, "address": this.state.address}
          console.log(data);
          fetch('/api/createuser', {
            method: 'POST',
            headers: {
         'Content-Type':'application/json'
       },
            body: JSON.stringify(data)}
          ).then(res => console.log(res)).then(this.setRedirect);
      
        }
        else{
          
            this.setState({alert: <div role="alert">
            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              Passwords do not match
            </div>
            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>Please ensure the passwords entered match</p>
            </div>
          </div>})
        }
    }
      render(){
        if(this.state.Redirect){
            return (<Redirect to="/" />);
        }
          console.log(this.state.username);

  return (
  <React.Fragment>

<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full">
    <div>
      <img class="mx-auto h-12 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Register
      </h2>
      <p class="mt-2 text-center text-sm leading-5 text-gray-600">
        Or
        <a href="/" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
          - Sign in
        </a>
      </p>
    </div>
    <form class="mt-8" onSubmit={this.handleSubmit}>
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm">
        <div>
          <input aria-label="Email address" name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address"  value={this.state.email2} onChange={ e => this.setState({ email2 : e.target.value }) } />
        </div>
        <div>
          <input aria-label="Canvas key" name="Address" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-mdfocus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Canvas Key"  value={this.state.address} onChange={ e => this.setState({ address : e.target.value }) } />
        </div>
        <div class="-mt-px">
          <input aria-label="Password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" value={this.state.password2} onChange={ e => this.setState({ password2 : e.target.value }) }/>
        </div>
        <div class="-mt-px">
          <input aria-label="Password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Confirm Password" value={this.state.password} onChange={ e => this.setState({ password : e.target.value }) }/>
        </div>
      </div>

    


      <div class="mt-6">
        <button onClick={this.createUser} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Register
        </button>
      </div>
    </form>
    <br></br>
    {this.state.alert}
  </div>
 
</div>
  </React.Fragment>


  );
}
}
