import React, {Component} from 'react';
import Login from './login';
import Fade from 'react-reveal/Fade';
var colors = {

    'smoke-darkest': 'rgba(0, 0, 0, 0.9)',
    'smoke-darker': 'rgba(0, 0, 0, 0.75)',
    'smoke-dark': 'rgba(0, 0, 0, 0.6)',
    'smoke': 'rgba(0, 0, 0, 0.5)',
    'smoke-light': 'rgba(0, 0, 0, 0.4)',
    'smoke-lighter': 'rgba(0, 0, 0, 0.25)',
    'smoke-lightest': 'rgba(0, 0, 0, 0.1)',

    }
export default class App extends Component {
    constructor (props){
        super(props);
      
        this.state = {
         showResults: false,
         value: 'py-1 hidden',
         donthide: 'py-1',
         hide: 'py-1 hidden',
         value2: 'rounded-md bg-white shadow-xs  hidden',
         donthide2: 'rounded-md bg-white shadow-xs',
         hide2: 'rounded-md bg-white shadow-xs  hidden',
         active: false
          };
      
      
   

      
      this.togalModal = this.togalModal.bind(this);
      this.clicked = this.clicked.bind(this);
      }
      togalModal(){
        console.log('OGJake');
        console.log('swegilicious')
          this.setState({showResults: !this.state.showResults})
      }
      clicked(){
        if(this.state.active){
          this.setState({value: this.state.hide, 
          value2: this.state.hide2})
          console.log('HERE');
        }
        else{
        this.setState({value: this.state.donthide, value2: this.state.donthide2})
        console.log('HERE');
        }
        this.setState({active: !this.state.active})
        console.log('HERE');
      }
      render(){
  return ( <React.Fragment>
  
<nav class="flex items-center justify-between flex-wrap bg-indigo-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 p-6">

  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Blog
      </a>
    </div>
    <div class="relative inline-block text-left">
  <div>
    <span class="rounded-md shadow-sm">
      <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"  onClick={this.clicked}>
        Options
        <svg class="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
        </svg>
      </button>
    </span>
  </div>


  <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
    <div class={this.state.value2}>
      <div class={this.state.value}>
        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">Account settings</a>
        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">Support</a>
        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">License</a>
        <form method="POST" action="#">
          <button type="submit" class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
            Sign out
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
  </div>
   

</nav>
<br></br>
<br></br>

{ this.state.showResults ? <Login ></Login> : <h1></h1> }

</React.Fragment>

  );}

}
