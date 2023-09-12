import React,{Component} from 'react';
import {Alert} from 'react-bootstrap';

class About extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <Alert variant="warning">About</Alert>
            </div>
        );
    }
}

export default About;