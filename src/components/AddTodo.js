import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.submit} style={{ display: 'flex' }}>
        <input
          type='Text'
          name='title'
          style={{ flex: '10', padding: '5px' }}
          placeholder='Add todo'
          value={this.state.title}
          onChange={this.onChange}
        />

        <input
          type='submit'
          value='Submit'
          className='btn'
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default AddTodo;
