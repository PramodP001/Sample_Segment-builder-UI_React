import React from 'react';
import Header from './Header/Header';
import SideBar from './Sidebar/Sidebar';
import SecondHeader from './SecondHeader/SecondHeader';
import Form from './forms/Form';
import './Main.css';

function Main() {
  return (
    <div className="container-fluid remove-default-margin">
      <Header/>
      <div className="row">
        <SideBar/>
        <div class="col-md-10">
          <SecondHeader/>
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default Main;
