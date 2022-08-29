import React from 'react';
import QuoteBox from './QuoteBox';
import quotes  from '../quotes.json'

const Button = ({changenumber, sendColor}) => {

   return (

        <div>
            <button className='button1' onClick={changenumber} style={{background: sendColor}} > <i class="fa-solid fa-arrow-pointer"></i></button>
        </div>
    );
};

export default Button;