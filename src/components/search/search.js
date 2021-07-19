import React, {Component, useLayoutEffect} from 'react';
import './style.css'
export default class Search extends Component
{
    constructor(props)
    {
        super(props)
        
    }
    
    render()
    {
        return(
        <>
        <input type='text'
        placeholder='search...'>
        </input>
        <button>Найти</button>
        </>
        )
    }
}