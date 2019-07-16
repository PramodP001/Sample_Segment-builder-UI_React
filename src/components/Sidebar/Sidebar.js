import React from 'react';
import './Sidebar.css';

function SideBar() {
    return (
        <div class="col-12 col-md-2 p-0 bg-dark default-height">
            <nav class="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start">
                <div class="collapse navbar-collapse">
                    <ul class="flex-md-column flex-row navbar-nav w-100 justify-content-between customUl">
                        <li class="nav-item">
                            <a class="nav-link pl-0 navCustomLink" href="#">
                                <i class="fa fa-share-alt"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>Overview</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pl-0 navCustomLink" href="#">
                                <i class="fa fa-laptop"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>Experiences</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pl-0 navCustomLink" href="#">
                                <i class="fa fa-users"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>Segments</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pl-0 navCustomLink" href="#">
                                <i class="fa fa-bar-chart"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>Insights</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pl-0 navCustomLink" href="#">
                                <i class="fa fa-cloud"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>Visitor Cloud</span>
                            </a>
                        </li>
                        ..
                </ul>
                </div>
            </nav>
        </div>
    );
}

export default SideBar;
