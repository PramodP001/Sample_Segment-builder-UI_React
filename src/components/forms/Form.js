import React from 'react';
import './Form.css';

function FormComponent() {

  return (
    <div class="row">
        <div class="col-md-12 body-container-section">
            <div class="row top-space">
                <div class="col-md-4 box-style mobPadding16">
                    <h5 class="head-color mgn-bottom">Define a new Segment</h5>
                    <p>Add a Condition to define a segment. The more
                        conditions you add the mpre specific your segment
                        will be.
                    </p>
                </div>
                <div class="col-md-7 push-md-2 box-style mobPadding16">
                    <h5 class="head-color">Estimated Segment Size</h5>
                    <span class="text">
                        <span class="textspan">10-20%</span> of your total traffic expected to join based on
                        a sample of historical data.
                    </span>
                    <div class="progress">
                        <div class="progress-bar bg-success 
                            progress-bar-animated">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 box-style1 mobPadding16">
                    <div class="row">
                        <div class="col-md-10">
                            <p class="product_description">
                                Product purchased
                            <span>- What products have
                                    they interacted with? 
                            </span>
                            </p>
                        </div>
                        <div class="col-md-2">
                            <button type="button" class="btn btn-outline-secondary pull-right pull-right btn-style">
                                <i class="fa fa-trash"></i>&nbsp;Delete
                            </button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group input-padding">
                                <select class="form-control" id="sel1">
                                    <option>Category</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-2 input-padding">
                            <div class="form-group">
                                <select class="form-control" id="sel1">
                                    <option>is one Of</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-5 input-padding">
                            <div class="form-group">
                                <input type="text" class="form-control" id="usr"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2  input-padding">
                            <button type="button" class="btn btn-light">+ More</button>
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-md-9">
                            <p class="product_description">
                                Time of purchase
                                <span>-
                                    When did this
                                    purchase take place?
                                </span>
                            </p>
                        </div>
                        <div class="col-md-3">
                            <button type="button" class="btn  btn-outline-secondary pull-right pull-righ  btn-style">
                                <i class="fa fa-clock-o"></i>&nbsp;Remove Time Period
                            </button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 input-padding">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Product Purchased"/>
                              
                            </div>
                        </div>
                        <div class="col-md-2 input-padding">
                            <div class="form-group">
                                <select class="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3 input-padding">
                            <div class="form-group">
                                <input type="date" class="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 box-style1 mobPadding16">
                    <div class="row">
                        <div class="col-md-10">
                            <p class="product_description">
                                    Technology
                                <span>- What products have
                                        they interacted with?
                                </span>
                            </p>
                        </div>
                        <div class="col-md-2">
                            <button type="button" class="btn btn-outline-secondary pull-right  btn-style">
                                <i class="fa fa-trash"></i>&nbsp;Delete
                            </button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 input-padding">
                            <div class="form-group">
                                <select class="form-control" id="sel1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-2 input-padding">
                            <div class="form-group">
                                <select class="form-control" id="sel1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3 input-padding">
                            <div class="form-group">
                                <input type="text" class="form-control" id="usr"/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2  input-padding">
                            <button type="button" class="btn btn-light"> + More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 box-style1 mobPadding16">
                    <div class="row">
                        <div class="col-md-2">
                            <p class="product_description">New Condition</p>
                        </div>
                        <div class="col-md-3  input-padding">
                            <div class="form-group">
                                <select class="form-control" id="purchasehistory">
                                    <option>Purchase History</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-2 pull-right input-padding"> 
                            <button type="button" class="btn btn-outline-secondary pull-right btn-style btn-color">+ Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FormComponent;
