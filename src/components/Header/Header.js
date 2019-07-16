import React from 'react';
import './Header.css';

function Header() {
    return (
        <div class="row">
            <div class="col-md-12">
                <nav class="navbar navbar-expand-sm navbar-light">
                    <div class="navbar-brand">
                        <h2><b>Qubit.</b></h2>
                    </div>
                    <div class="right-nav-bar">
                        <div class="row">
                            <div class="col-md-2 col-sm-2 col-xs-2 col-2 notification-section">
                                <i class="fa fa-bell" aria-hidden="true"></i>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-4 col-4 user-login-section">
                                <span class="ms"> MS</span>
                                <span class="align-left"> Mark Smith</span>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-6 col-6">
                                <form class="form-inline">
                                    <input class="form-control search-section" type="text" value="Union Fashion" placeholder="Search" />
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;
