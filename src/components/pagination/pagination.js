import React, {Component, useLayoutEffect} from 'react';
import './style.css'
import rightArrow from '../../img/svg/right-arrow.svg'
import leftArrow from '../../img/svg/left-arrow.svg'
export default class Pagination extends Component
{
    constructor(props)
    {
        super(props)
        
    }
    
    render()
    {
        const {leftClick,rightClick}=this.props;
        // const {rightClick}=this.props;
        return( 
            <>
            <button  id='left-btn' class='pagination__btn-left'></button>
            <label  onClick={leftClick} for="left-btn"><img src={leftArrow} width='35px' ></img></label>
            <button id='right-btn' class='pagination__btn-right'></button>
            <label  onClick={rightClick} for="right-btn"><img src={rightArrow} width='35px'></img></label>
            </>
        )
    }
}
