 // eslint-disable-next-line
import { checkPropTypes } from 'prop-types';
import React from 'react';

const Card = (props) => {
    const {name,email,id, username} = props;
    return (
        <div className= ' tc bg-light-green dib br3 pa3 ma1 grow bw2 shadow=5 '>
           <img alt = "robots" src = {`https://robohash.org/${id}?200x200`}/>

            < div>
            <h2> {name} </h2>
            <p> {email}</p>
            <p> {username}</p>
            </div>
        </div>

    );
}

export default Card;
