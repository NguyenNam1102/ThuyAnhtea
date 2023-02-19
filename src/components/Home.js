import React from "react";
import './Home.css';
import Banner from "./Banner";

class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <Banner />
                <h1>Home</h1>
            </div >

        )
    }
}

export default Home;