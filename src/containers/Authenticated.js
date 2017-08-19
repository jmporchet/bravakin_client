import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { login } from '../actions';

import TopMenu from '../components/TopMenu'
import Dashboard from '../components/Dasshboard';
import Performance from '../components/Performance';
import Preferences from '../components/Preferences';

class Authenticated extends React.Component {
  constructor () {
    super();
    this.state = { loggedIn: false };
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/sign-in" />
    } else {
      return <div>
        <TopMenu />
        <Route exact path="/" component={Dashboard}/>
        <Route path="/performance" component={Performance}/>
        <Route path="/preferences" component={Preferences}/>
      </div>;
    }
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.authorization.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authenticated);
