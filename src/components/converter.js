import React, { Component } from 'react'

import './converter.css'

export default class Converter extends Component {

    constructor(props){
        super(props);

        this.state = {
            coinA_value:"",
            coinB_value:0,
        }

        this.converter = this.converter.bind(this);
    }

    converter(){
        
        let from_to = `${this.props.coinA}_${this.props.coinB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=y&apiKey=9bc4c3198176577a4d65`;

        fetch(url)
        .then(res=>{
            return res.json()
        })
        .then(json=>{
            let quotation = json[from_to].val;
            let coinB_value = (parseFloat(this.state.coinA_value) * quotation).toFixed(2);
            this.setState({coinB_value})
        })

    }

    render() {
        return (
            <div className="converter">
                <h2>{this.props.coinA} para {this.props.coinB}</h2>
                <input type="text" onChange={ (event)=>{this.setState({coinA_value:event.target.value})} }></input>
                <input type="button" value="Converter" onClick={this.converter} ></input>
                <h2>{this.state.coinB_value}</h2>
            </div>
        )
    }
}
