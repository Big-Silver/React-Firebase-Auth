import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";


const Sidebar = () => (
    <AuthUserContext.Consumer>
        {authUser => (authUser ?
            <div className="sidebar">
                <ul className="sidebar-menu">
                    <li className="nav-item">
                        <Link className="nav-link sidebar-link mt-4 py-3" to={ROUTES.HOME}>
                            <span className="title">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link sidebar-link py-3" to={ROUTES.ACCOUNT}>
                            <span className="title">Account</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link sidebar-link py-3" to={ROUTES.ADMIN}>
                            <span className="title">Admin</span>
                        </Link>
                    </li>
                </ul>
            </div> : ''
        )}
        
    </AuthUserContext.Consumer>
);

export default Sidebar;
