import React from 'react';
import "../App.css";

const contact = () => {
    return (
        <form className="form">
            <div className="name">
                <label for="name">Name</label>
                <input type="text" id="name"></input>
            </div>
            <div className="email">
                <label for="email">Email</label>
                <input type="email" id="email"></input>
            </div>
            <div className="add">
                <input type="submit" value="Add"></input>
            </div>
        </form>

        

    )
}

export default contact
