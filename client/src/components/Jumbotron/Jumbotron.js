import React from "react"

const Jumbotron = () => {
    return (
        <div style = {{
            fontFamily: "Comic Sans MS, cursive, sans-serif",
            textAlign: "center",
            border: "solid black 3px",
            width: "60%",
            margin: "auto"
        }}><div style = {{
            padding: 10,
            textShadow: "1px 1px black",
            color: "white", backgroundColor: "blue",
            borderBottomLeftRadius: 5, borderBottomRightRadius: 5
        }}>
                Type in a book to find results off Google Books.
                </div>
            <div style = {{ padding: 15 }}>
                If you like a book, click "Save" to save it to your library.
            </div>
        </div>
    )
}
export default Jumbotron