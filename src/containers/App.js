import React from 'react'
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll'
import Searchbox from '../components/Searchbox'
import '../containers/App.css'
import ErrorBoundry from '../components/ErrorBoundry';

class App extends React.Component{
    constructor() {
        super();
        this.state={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json() )
        .then(users => this.setState( {robots: users} ));  //get the users from url 
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })  

        if(!robots.length){
            return <h1>Loading....</h1>
        }
        else{
            return(
                <div className ='tc'>
                    <h1 className = 'f1'> RoboFriends</h1>
                    <Searchbox  searchange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <Cardlist   robots = {filterRobots}/>
                        </ErrorBoundry>    
                    </Scroll>   
                </div>               
            );
            
        }     
    }
    
}

export default App;