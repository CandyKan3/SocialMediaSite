import React, {Component} from 'react';
import Nav from './nav';
import Fade from 'react-reveal/Fade'
import style from './home.css';
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
            success: true,
            inline: "hidden",
            outline: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center"
    
          };
      
      
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.createUser = this.createUser.bind(this);

      
      
      }
      createUser(){
          this.setState({ success: !this.state.success });
            this.setState({outline: this.state.inline});

      }

      handleSubmit(event) {
          
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
        handleSubmit2(event) {
            console.log("HERE");
              event.preventDefault();
              const data ={"email": this.state.email2, "password": this.state.password2}
              console.log(data);
              fetch('/api/login', {
                method: 'POST',
                headers: {
             'Content-Type':'application/json'
           },
                body: JSON.stringify(data)}
              ).then(res => console.log(res)).then(this.setRedirect);
          
            }
      render(){
          if(!this.state.createuser){
  return (
  <React.Fragment>

    <div class="grid grid-cols-3">
        
  <div></div>
 
  <div>

<div class="w-full max-w-s ">

  <form class={this.state.outline}onSubmit={this.handleSubmit2}>
    
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"  value={this.state.email2} onChange={ e => this.setState({ email2 : e.target.value }) }/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"value={this.state.password2} onChange={ e => this.setState({ password2 : e.target.value }) }/>

    </div>
  
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"  onClick={this.createUser}>
        Sign Up!
      </a>
    </div>
   
  </form>
 
</div>


<Fade top opposite cascade when={this.state.outline=="hidden"}>
  <div>

<div class="w-full max-w-s">

  
<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center" onSubmit={this.handleSubmit}>
          <div class="mb-4">
              
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"  value={this.state.email} onChange={ e => this.setState({ email : e.target.value }) }/>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"value={this.state.password} onChange={ e => this.setState({ password : e.target.value }) }/>
      
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Confirm Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"value={this.state.password} onChange={ e => this.setState({ password : e.target.value }) }/>
           
          
          
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Address
            </label>
            <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="address" type="password" placeholder="******************" value={this.state.address} onChange={ e => this.setState({ address : e.target.value }) }/>
            
            </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
              Register
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={this.createUser}>
              Login!
            </a>
          </div>
        </form>
 
</div>
</div>

</Fade>
</div>
</div>
  </React.Fragment>


  );
}
else{
    return (
        <React.Fragment>
          <div class="grid grid-cols-3">
        <div></div>
        <div>
        
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 items-center" onSubmit={this.handleSubmit}>
          <div class="mb-4">
              
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"  value={this.state.email} onChange={ e => this.setState({ email : e.target.value }) }/>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"value={this.state.password} onChange={ e => this.setState({ password : e.target.value }) }/>
      
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Confirm Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"value={this.state.password} onChange={ e => this.setState({ password : e.target.value }) }/>
           
          
          
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Address
            </label>
            <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="address" type="password" placeholder="******************" value={this.state.address} onChange={ e => this.setState({ address : e.target.value }) }/>
            
            </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
              Register
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={this.createUser}>
              Login!
            </a>
          </div>
        </form>
    
      </div>
      </div>
      
        </React.Fragment>
      
      
        );
}
}
}
