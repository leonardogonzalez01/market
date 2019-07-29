import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Header from "../components/commons/Header/Header";
import Form from "../components/Admin/Form/Form";
import List from "../components/Admin/List/List";

class Admin extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container>
          <Form/>
          <List/>
        </Container>
      </div>

    );
  }
}

export default Admin;