import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import SideBar from './navbar/SideBar';
import Home from './contents/home/Home';
import './css/App.scss'
import NewPost from './contents/newPost/NewPost';
import Detail from './contents/posting/Detail';
import ModifyPost from './contents/ModifyPost';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact="exact" path='/newPost' component={NewPost}/>
                <Route exact path='/modify/:postId' component={ModifyPost} />
                <Route
                    exact="exact"
                    path='*'
                    component={() => (
                        <div id='wrapper'>
                            <SideBar/>
                            <div className='contents'>
                                <Route exact path='/' component={Home}/>
                                <Route exact path='/:postId' component={Detail} />
                            </div>
                        </div>
                    )}/>
            </Switch>
        </BrowserRouter>

    );
}

export default App;
