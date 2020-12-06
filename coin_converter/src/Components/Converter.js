import React, {Component} from 'react'

import './Converter.css'

export default class Converter extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            coinFromValue: "",
            coinToValue: 0,
        }

        this.toConvert = this.toConvert.bind(this);
    }

    toConvert(){
        //console.log(this.state)
        let fromTo = `${this.props.coinFrom}_${this.props.coinTo}`;
        let url = `http://free.currencyconverterapi.com/api/v5/convert?q=${fromTo}&compact=y&apiKey=c5df9e06a3dae788676d`;

        fetch(url)
        .then(res =>{

            return res.json()
        })
        .then(json =>{
            let cotation = json[fromTo].val;
            let coinToValue = (parseFloat(this.state.coinFromValue) * cotation).toFixed(2);
            this.setState({coinToValue})
        })

    }
    
    render(){
        return (
            <div className="converterClass">
                <h2> {this.props.coinFrom} to {this.props.coinTo} </h2>
                <input type="text" onChange={(event)=>{this.setState({coinFromValue:event.target.value})}}/>
                <input type="button" value="Converter"onClick={this.toConvert}/>
                <h2> {this.state.coinToValue} </h2>
            </div>
        )
    }
}