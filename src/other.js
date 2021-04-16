import React, { Component } from 'react';
import './App.css';




class App extends Component {
    render(){

        return (
                <div>
                <h1 className="pt-5 animateH1"> WEB DEVELOPER</h1>
                <h1 className="mb-5 animateH1"> Rizos</h1>

                <div className="container">
                        <div className="row justify-content-between">
                                <div className="col-4">
                                    <img  alt={`${this.props.altImg}`} className="dev-images" src=''></img>
                                </div>
                                <div className="col-4 m-auto pb-4">
                                    <img  alt={`${this.props.altImg}`} className="dev-images" src='' ></img>
                                </div>
                                <div className="col-4 m-auto pb-4">
                                    <img  alt={`${this.props.altImg}`} className="dev-images" src=''></img>
                                </div>
                                <div className="col-4 m-auto pb-4">
                                    <img  alt={`${this.props.altImg}`} className="dev-images" src="images/javascript.png"></img>
                                </div>
                                <div className="col-4 m-auto pb-4">
                                    <img  alt={`${this.props.altImg}`} className="dev-images" src="images/java.png"></img>
                                </div>
                                <div className="col-4 m-auto pb-4">
                                    <img  alt={`${this.props.altImg}`} className="dev-images" src="images/php.jpg"></img>
                                </div>
                                <div className="col-4 m-auto pb-4">
                                    <img  alt={`${this.props.altImg}`} className="dev-images" src="images/sql.png"></img>
                                </div>
                                <div className="col-4 m-auto pb-4">
                                    <img  alt={`${this.props.altImg}`} className="dev-images " src="images/python.png"></img>
                                </div>
                                <div className="col-4 m-auto pb-4">
                                    <img  alt={`${this.props.altImg}`} className="dev-images " src="images/react.png"></img>
                                </div>
                                <div className="col-4 m-auto pb-4">
                                    <img  alt={`${this.props.altImg}`} className="dev-images " src="images/vue.png"></img>
                                </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

export default App;
