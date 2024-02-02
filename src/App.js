import React, { Suspense } from 'react';
import './App.css';
import Navbar from '../public/components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
//import Users from '../public/components/Users/Users';
//import ProfileContainer from '../public/components/Profile/ProfileContainer';
import HeaderContainer from '../public/components/Header/HeaderContainer';
import UsersContainer from '../public/components/Users/UsersContainer';
import Login from '../public/components/Login/Login';
import { connect, Provider } from 'react-redux';
import Preloader from '../public/components/common/Preloader/Preloader';
import store from "./redux/redux-store";
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import { withSuspense } from './hoc/withSuspense';

//import DialogsContainer from '../public/components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import ('../public/components/Dialogs/DialogsContainer'));
//import ProfileContainer from '../public/components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(() => import ('../public/components/Profile/ProfileContainer'));

class  App extends Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert("Some erroe occured");
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    
      return (
        //<BrowserRouter>
          <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
            <Switch>
              <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
              <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
              <Route path='/users' render={ () => <UsersContainer /> } />
              <Route path='/login' render={ () => <Login /> } />
              <Route path='*' render={ () => <div>404 NOT FOUND</div> } />
            </Switch>
            </div>
          </div>
       // </BrowserRouter>
      )
    }
  
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
   withRouter,
   connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;

