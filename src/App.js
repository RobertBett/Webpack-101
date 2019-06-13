import React, { Component } from 'react';
import Users from './containers/Users';
import Pizza from './containers/Pizza';
import asyncComponent from './asyncComponent';

const AsyncPizza = asyncComponent (() =>{
    return import('./containers/Pizza')
})

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    asyncComponent
                    <Link to='/'>Users</Link>
                    <Link to='/pizza'>Pizza</Link>
                </div>
                <div>
                    <Route  path="/" exact component={Users}/>
                    <Route  path="/pizza" exact component={AsyncPizza}/>
                </div>
            </div>
        );
    }
}

export default App;
