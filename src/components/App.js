

// import React from "react"
// import TodoItem from "./TodoItem"
// import todosData from "./todosData"

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             todos: todosData
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
       
//     static getDerivedStateFromProps(props,state){
           
//     } 

//     handleChange (id) {
//         this.setState((prevState)=>{
//             const updatedState = prevState.todos.map(todo=>{
//                 if(todo.id === id){
//                     todo.completed = !todo.completed
//                 }
//                 return todo;
//             })
//             return {todos : updatedState,}
                
            
//         })

//         }
    
    
//     render() {
//         const todoItems = this.state.todos.map(item =>
//              <TodoItem handleChange={this.handleChange} key={item.id} item={item}/>)
        
//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )    
//     }
// }

// export default App


// import React from 'react'
// import randomcolor from 'randomcolor';

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             count : 0,
//             rendcolor : '',
//             data : true,
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(){
//         let rendcolor = randomcolor();
//         this.setState( prevState=>{
//             return {count : prevState.count + 1,
//                     rendcolor : rendcolor }
//         })
//     }

//     componentDidMount(){
//         setTimeout(() => {
//             this.setState({
//                 data : false,
//             })
//         }, 1500);
//     }

//     render(){
//         if(this.state.data){
//             return(
//                         <div>
//                             <h1 style={{color : this.state.rendcolor}}>{this.state.count}</h1>
//                             <button onClick={this.handleClick}>Click me</button>
//                             <div>Acces is in prosses...Wait</div>
//                         </div>
//                     )
//         }

//             return <h1 style={{color : 'red'}}>Data Loading failed</h1>
        
        
//     }
// }

// export default App

// import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//            loggedIn : false,
//         }
//         this.changeLoggedinHandler = this.changeLoggedinHandler.bind(this);
//     }

//     changeLoggedinHandler(){
//             this.setState({loggedIn : !this.state.loggedIn})
        
//     }


//     render(){
//         let information = ''; 
//         if(this.state.loggedIn){
//            information = 'logged in'
//         }else{
//             information = 'logged out'
//         }

//             return (
//             <div>
//                 <h1>User is {information} </h1>
//                     <button onClick={this.changeLoggedinHandler}> 
//                         {this.state.loggedIn=== false ? "Log in" : "Log out"} 
//                     </button>
//             </div>
//             )
//     }
    
// }

// export default App




// import React from 'react'

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             loading: false,
//             characters : [],
//         }
//     }

//     componentDidMount() {
//        this.setState({
//            loading : true,
//        }) 
//         fetch('https://swapi.co/api/people')
//             .then( response => response.json())
//             .then(data =>{
//                 this.setState({
//                     loading : false,
//                     characters : data.results,
//                 })
//             }) 
            
//     }


//     render(){
//         console.log(this.state.characters)
       
//        return(
//            this.state.characters.map( character =>{
//               return( <div key={character.edited}>
//                          <p>{character.name}</p>
//                      </div>)
//         })
//        ) 
        
//     }
// }

// export default App


// import React from 'react'


// class App extends React.Component{
//    constructor(){
//        super();
//        this.state={
//            firstName : '',
//            lastName : '',
//            age : null,
//        }
//        this.handleChange = this.handleChange.bind(this);
//    }

//    handleChange(event) {
//        this.setState({
//            [event.target.name] : event.target.value,
//        })
//    }


//    render(){
//        return(
//            <div>
//                <form>
//                    <input type="text" name='firstName' placeholder='firstName' onChange={this.handleChange}/>
//                    <input type="text" name='lastName' placeholder='lastName' onChange={this.handleChange}/>
//                    <input type="text" name='age' placeholder='age' onChange={this.handleChange}/>
//                </form>
//                  <h1>{this.state.firstName} {this.state.lastName} {this.state.age}</h1>
//            </div>

//        )
//    }
// }

// export default App

import React from 'react'
import Info from './info';


class App extends React.Component{
    constructor(){
        super();
        this.state={
            firstName : '',
            lastName : '',
            position : '',
            mobile : '',
            placeLiving : '',
            email : '',
            age : null,
            gender : '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
       this.setState({
           [event.target.name] : event.target.value, 
       })
    }


    render(){
    

        return(
          <div>
            <div className='container'>
                <form>
                    <input type='text' name='firstName' placeholder='firstName' onChange={this.handleChange}/>
                    <input type='text' name='lastName' placeholder='lastName' onChange={this.handleChange}/> <br></br>
                    <input type='text' name='position' placeholder='position' onChange={this.handleChange}/>
                   <hr></hr>
                    <input type='text' name='mobile' onChange={this.handleChange} placeholder='Phone'/>
                    <input type='text' name='placeLiving' onChange={this.handleChange} placeholder='country,city'/>
                    <input type='text' name='email' onChange={this.handleChange} placeholder='email'/>





                    <input type='number' name='age' placeholder='age' onChange={this.handleChange} /><hr></hr>

                    <input type='radio' name='gender' value='Male' onChange={this.handleChange}/> Male 
                    <input type='radio' name='gender' value='Famale' onChange={this.handleChange}/> Famale <hr></hr>
                    </form>
                 
                <Info 
                     firstName={this.state.firstName}
                     lastName={this.state.lastName}
                     position={this.state.position}
                     mobile={this.state.mobile}
                     placeLiving={this.state.placeLiving}
                     email={this.state.email}
                     />
                
            </div>
         </div>
        )
    }
}


export default App