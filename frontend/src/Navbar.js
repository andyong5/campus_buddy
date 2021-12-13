
import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Campus Buddy</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Classes</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Clubs</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Friends</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;