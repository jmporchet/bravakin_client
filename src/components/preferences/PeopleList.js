import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { addPeople } from '../../actions';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

import PeopleForm from './PeopleForm'

class Preferences extends React.Component {


  renderinteresting_people () {
    return this.props.interesting_people.map((el, index) => <li key={index}>{el}</li>)
  };

  handleSubmit = (formData) => {
    console.log('formdata', formData);
    const { user } = formData;
    this.props.addPeople('@' + user);

    var body = {
      'update': {
    'be_like': [
      user
    ]
  },
  'add': {
    'like_tags': [
    ]
  }
};

    fetch("https://private-cb530a-bravakin.apiary-mock.com/me", {
      method: "PUT",
      headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ACCESS_TOKEN'
              },
      body: JSON.stringify(body)
    });
  }

  render() {
    return (
      <div>
        <ul>
        {this.renderinteresting_people()}
        </ul>
        <PeopleForm onSubmit={this.handleSubmit} />
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  interesting_people: state.listHashtags.interesting_people
})

const mapDispatchToProps = (dispatch) => ({
  addPeople: (people) => dispatch(addPeople(people))
})

export default connect(mapStateToProps, mapDispatchToProps)(Preferences)
