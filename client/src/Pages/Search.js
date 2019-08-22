import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Input, FormBtn } from "../components/Form"
import "../Style.css"
import { Box, BoxBoard } from "../components/Box/Box";

class Search extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: "",
    };

    handleInputChange = event => {
        // const value = event.target.value
        // const name = event.target.name
        // this would be the es5 version of {name, value}
        const { name, value } = event.target;
        this.setState({
            //used for multiple (array of) inputs
            [name]: value
        });
    };

    findBooks = event => {
        event.preventDefault();
        API.findAll(this.state.title)
            .then(results => {
                console.log(results.data.items)
                if (results.data.items === undefined) {
                    this.setState({ errorMessage: "error" });
                } else {
                    this.setState({ books: results.data.items })
                }
                // const filteredResults = results.data.items.filter(
                //     result =>
                //         result.volumeInfo.title &&
                //         result.volumeInfo.infoLink &&
                //         result.volumeInfo.authors &&
                //         result.volumeInfo.description &&
                //         result.volumeInfo.imageLinks &&
                //         result.volumeInfo.imageLinks.thumbnail
                // );
                // results.data.items.map(result => console.log(result.volumeInfo.title))
                // console.log(filteredResults);
            })
            .catch(err => console.log(err));
    };


    render() {
        return (
            <>
                <Jumbotron />
                <div className="form" style={{ marginTop: 20, marginBottom: 20, }}>
                    <Input
                        value={this.state.title}
                        //runs function everytime a character is typed in this input field
                        onChange={this.handleInputChange}
                        name="title"
                        // displayed text when nothing is typed
                        placeholder="Title (required)"
                    />
                    <span><FormBtn onClick={this.findBooks}>Submit</FormBtn></span>
                </div>

                <div className="grid">
                    {this.state.books.map(x =>
                        <div className="row" key={x.id}>
                            <div className="">
                                <div className="title" key={x.id}>{x.volumeInfo.title}</div>
                                <div className="author">{x.volumeInfo.authors}</div>
                            </div>
                            <div style={{ display: "inline-block", margin: "0px 10px" }}>
                                <img className="image" src={x.volumeInfo.imageLinks.thumbnail} />
                                <p className="description">{x.volumeInfo.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </>
        )
    }
}
export default Search;