import React, { useState } from 'react';

import quotes  from '../quotes.json'

const QuoteBox = ({number, sendColor}) => {


return (
    
            <div className='quotebox' style={{color : sendColor}}>
            <p className='p1'> <i class="fa-solid fa-quote-left"></i> {quotes[number].quote}</p>
            <p className='p2'>{quotes[number].author}</p>
            </div>
    
    );
};

export default QuoteBox;