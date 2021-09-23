import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, callingCodes, flag, population} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="country">
            <h1>{name}</h1>
            <img className="flag" src={flag} alt="" />
            <h5>Calling Codes:{callingCodes}</h5>
            <h4>population:{population}</h4>
            <button onClick = {() => handleAddCountry(props.country)} >add country</button>
            
        </div>
    );
};

export default Country;