import React from "react";

function Nav() {
    return (
        <nav style = {{
            fontFamily: "Comic Sans MS, cursive, sans-serif",
            background: "grey",
            marginBottom: 20,
            padding: 10
        }}>
            <a href="/">Search</a>
            <a href="/saved">Library</a>
        </nav>
    );
};

export default Nav;