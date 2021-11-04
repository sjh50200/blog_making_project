import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SideBar from './contents/SideBar';
import Home from './contents/Home';
import './css/App.scss'
import NewPost from './contents/NewPost';
import Detail from './contents/Detail';
import ModifyPost from './contents/ModifyPost';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* nav 없이 */}
                <Route exact="exact" path='/newPost' component={NewPost}/>
                <Route exact path='/modify/:postId' component={ModifyPost} />
                {/* nav 포함 */}
                <Route exact="exact" path='*'
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
