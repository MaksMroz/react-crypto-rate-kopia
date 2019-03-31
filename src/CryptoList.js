import React, {Component} from "react";

class CryptoList extends Component {
    render() {
        const lista = this.props.cryptoList;

        return ( 
            
            <ul> 
                {lista.map(currency =>
                <li key={currency.currency}>
                Last: rate: <span className={currency.class}>{currency.last}{currency.arrow}</span>
                <strong>{currency.currency}</strong>
                <span>[{currency.symbol}]</span>
                </li>
                )}
            </ul>
        );
    }
}

export default CryptoList;