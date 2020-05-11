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
            inline: "hidden",
            outline: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center",
            username: Cookies.get('Address'),
            location: "/user",
            registered: <h1></h1>,
            loggedin: <h1></h1>,
            response: ''
    
          };
      
      
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.createUser = this.createUser.bind(this);
        this.setRedirect = this.setRedirect.bind(this);

    
      
      }
      componentDidMount(){
     
        {this.setCookies()}
        console.log('here');
      }
   
      setRedirect(){

        console.log(Cookies.get('Address'));
        console.log('weouthere')
        if(Cookies.get('Address')!=''){
           this.setState({Redirect: true});
      
        }
        else{
 
          this.setState({loggedin:   
          <div role="alert">
            <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              Passwords do not match
            </div>
            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p>Please ensure the passwords entered match</p>
            </div>
          </div>
    })
        }
    }
      createUser(){
          this.setState({ success: !this.state.success });
            this.setState({outline: this.state.inline});

      }
        handleSubmit2(event) {
              event.preventDefault();
              const data ={"email": this.state.email2, "password": this.state.password2}
              console.log(data);
              fetch('/api/login', {
                method: 'POST',
                headers: {
             'Content-Type':'application/json'
           },
                body: JSON.stringify(data)}
              ).then(res =>res.text().then((data) => { let data1 = JSON.parse(data); this.setState({response: data1.message});})).then(this.setRedirect);
          
            }
            setCookies(){
              if(Cookies.get('Registered')=='true'){
                console.log("HEREeee");
                Cookies.remove('Registered');
               this.setState({registered: <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
               <div class="flex">
                 <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                   <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                   </svg>
                   </div>
                 <div>
                   <p class="font-bold">Account has been created successfuly!</p>
                   <p class="text-sm">Please login below.</p>
                 </div>
               </div>
             </div>});
          
            }
            }
      render(){
        if(this.state.Redirect){
            return (<Redirect to="/user" />);
        }
   
  return (
  <React.Fragment>
    {this.state.registered}
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full">
    <div>
      <img class="mx-auto h-12 w-auto" src="/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
      <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
        Sign in to your account 
      </h2>
      <p class="mt-2 text-center text-sm leading-5 text-gray-600">
        Or
        <a href="/register" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
          - Sign up 
        </a>
      </p>
    </div>
    <form class="mt-8" onSubmit={this.handleSubmit2}>
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm">
        <div>
          <input aria-label="Email address" name="email" type="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address"  value={this.state.email2} onChange={ e => this.setState({ email2 : e.target.value, registered: <h1></h1> }) } />
        </div>
        <div class="-mt-px">
          <input aria-label="Password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" value={this.state.password2} onChange={ e => this.setState({ password2 : e.target.value }) }/>
        </div>
        
      </div>

      <div class="mt-6 flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
          <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">
            Remember me
          </label>
        </div>

        <div class="text-sm leading-5">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
            Forgot your password?
          </a>
        </div>
      </div>

      <div class="mt-6">
        <button onClick={this.createUser} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
    {this.state.loggedin}
  </div>
</div>
  </React.Fragment>



      
        );
}

}
