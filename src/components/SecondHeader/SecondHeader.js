import React from 'react';
import './SecondHeader.css';

function SecondHeader() {
    return (
        <div class="row">
            <div class="col-md-12 body-header-section mobPadding16">
                <div class="row">
                    <div class="col-md-7 allgn-left">
                        <input type="text" class="edit-input" value="Mobile users who bought shoes on Black Friday" />
                        <i class="fa fa-edit icon-color"></i>
                        <br></br><span class="txt-allgn-left">Created by Mark Smith</span>
                    </div>
                    <div class="col-md-5 pull-right btn-wrapper">
                        <button type="button" class="btn btn-outline-primary">Exit</button>
                        <button type="button" class="btn btn-outline-primary">Preview</button>
                        <button type="button" class="btn btn-outline-primary save-btn">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecondHeader;
