import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import HomePage from './container/Homepage/Homepage'
class App extends Component {
    render(){
      return(
        <div>
          <Layout>
            <Switch>
            <Route path="/" exact component = {HomePage}/>
            </Switch>
          </Layout>
        </div>
      )
    }
}

export default App;
