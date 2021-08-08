import React, {Component, useLayoutEffect, useState} from 'react';
import Pagination from '../pagination/pagination'
// import Search from '../search/search'
import './style.css'

export default class Main extends Component
{
    constructor(props)
    {
        super(props)
        this.state = { 
          data: null,
          start:1,
          end:9}
        

    }
    componentDidMount(){
        let r = new XMLHttpRequest();
        const verysmallreq = "http://www.filltext.com?rows=2&id={number|1000}"
        const smallreq = "http://www.filltext.com?rows=199&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&={addressObject}&description={lorem|32}";
        const bigreq = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

        r.open("GET",smallreq, true);
      r.onreadystatechange = () => {
        if (r.readyState != 4 || r.status != 200) return;
        var data = JSON.parse(r.responseText);
        this.setState({data})
       
      };
      r.send();
      this.sortfuncid =this.sortfuncid.bind(this);
      this.leftClick = this.leftClick.bind(this);
      this.rightClick = this.rightClick.bind(this);
      this.searchfunc=this.searchfunc.bind(this);
      this.sbros=this.sbros.bind(this);
    }
    sortfuncid(e){
    let eType = e.target.getAttribute('data-type');
      const curtype = document.querySelector(`.${eType}`);
     console.log(curtype);
     console.log(eType);
      if (curtype.classList.contains('sorted'))
      {
        console.log("Сортировка по убыванию");

        if (eType == 'id'){
          var data = this.state.data.sort((a,b)=>b.id-a.id);
              this.setState({data})
        }
          
      if (eType=='firstName'){
        var data = this.state.data.sort((a,b)=>{
          if (b.firstName > a.firstName) {
            return 1;
          }
          if (b.firstName < a.firstName) {
            return -1;
          }
          return 0;
        });
        this.setState({data})
      }
      
      if (eType=='lastName'){
        var data = this.state.data.sort((a,b)=>{
          if (b.lastName > a.lastName) {
            return 1;
          }
          if (b.lastName < a.lastName) {
            return -1;
          }
          return 0;
        });
        this.setState({data})
      }
    
      if (eType=='email'){
        var data = this.state.data.sort((a,b)=>{
          if (b.email > a.email) {
            return 1;
          }
          if (b.email < a.email) {
            return -1;
          }
          return 0;
        });
        this.setState({data})
      }
      if (eType=='phone'){
        var data = this.state.data.sort((a,b)=>{
          if (b.phone > a.phone) {
            return 1;
          }
          if (b.phone < a.phone) {
            return -1;
          }
          return 0;
        });
        this.setState({data})
      }


        curtype.classList.toggle('sorted');
      }
      else
      {
        console.log("Сортировка по возрастанию");
      

        if (eType == 'id'){
            var data = this.state.data.sort((a,b)=>a.id-b.id);
            this.setState({data})
        }
            
        if (eType=='firstName'){
          var data = this.state.data.sort((a,b)=>{
            if (a.firstName > b.firstName) {
              return 1;
            }
            if (a.firstName < b.firstName) {
              return -1;
            }
            return 0;
          });
          this.setState({data})
        }

        if (eType=='lastName'){
          var data = this.state.data.sort((a,b)=>{
            if (a.lastName > b.lastName) {
              return 1;
            }
            if (a.lastName < b.lastName) {
              return -1;
            }
            return 0;
          });
          this.setState({data})
        }
        if (eType=='email'){
          var data = this.state.data.sort((a,b)=>{
            if (a.email > b.email) {
              return 1;
            }
            if (a.email < b.email) {
              return -1;
            }
            return 0;
          });
          this.setState({data})
        }
        if (eType=='phone'){
          var data = this.state.data.sort((a,b)=>{
            if (a.phone > b.phone) {
              return 1;
            }
            if (a.phone < b.phone) {
              return -1;
            }
            return 0;
          });
          this.setState({data})
        }
        curtype.classList.toggle('sorted');
    
      }
     
    }
    rightClick(){
      let page= 9
      this.setState({
          start:this.state.start+page,end:this.state.end+page
        })
    }
    leftClick(){
      let page= 9
      this.setState({
          start:this.state.start-page,end:this.state.end-page
        })
    }
    searchfunc(){
      
      let dataSearch = [];
      const search = document.querySelector('.search-value');
      let searchValue = search.value;
      for (let i =0; i<this.state.data.length; i++)
      {
        if(this.state.data[i].firstName.toLowerCase().includes(searchValue.toLowerCase()) || this.state.data[i].lastName.toLowerCase().includes(searchValue.toLowerCase()) 
        ||  this.state.data[i].email.toLowerCase().includes(searchValue.toLowerCase()) ||  this.state.data[i].phone.includes(searchValue)
      || this.state.data[i].id.toString().includes(searchValue))

   
        {
          dataSearch.push(this.state.data[i]);
        }
      }
    
      console.log(dataSearch);
      this.setState({
        data:dataSearch
      })

      // console.log(this.state.data);
    }
    sbros(){
      window.location.reload();
    }
    render()
    {

      ////////////scroll not 
      document.body.style.overflow = 'hidden';
      //////////////////////////////

        let component = null;
        let v = []
        let showv = [];
    if(!this.state.data) {
    	component = <h1>Loading...</h1>
      v.push(component);	
    }
    else {
      v = [];
    
     component = <div  id = "head"className='item'>
      <div data-type = 'id' onClick = {this.sortfuncid} className='id'>id</div>
      <div data-type = 'firstName' onClick = {this.sortfuncid} className='firstName'>firstName</div>
      <div data-type = 'lastName' onClick = {this.sortfuncid} className='lastName'>lastName</div>
      <div data-type = 'email' onClick = {this.sortfuncid} className='email'>email</div>
      <div data-type = 'phone' onClick = {this.sortfuncid} className='phone'>phone</div>
    </div>
      v.push(component);
     

    	// component = <ul>{this.state.data.map((d, i) => <li key={i}> {d.id} {d.firstName}</li>)} </ul>
      // {d.firstName} {d.id} {d.lastName} {d.email} {d.phone} {d.address} {d.description}
    
      for (let i=0; i<this.state.data.length; i++){
        component = 
        <div className='item'>
        <div className='item__id'   >{this.state.data[i].id}</div>
        <div className='item__fname'>{this.state.data[i].firstName}</div>
        <div className='item__lname'>{this.state.data[i].lastName}</div>
        <div className='item__email'>{this.state.data[i].email}</div>
        <div className='item__phone'>{this.state.data[i].phone}</div>
        </div>
        v.push(component)
        // <p>{this.state.data[i].id}</p>
      }
     
      showv.push(v[0])


      for(let i=this.state.start; i<this.state.end; i++)
      {
        showv.push(v[i]);
      }
     
    }

    let component2 = 
    <>
    <input className='search-value' type='text'
    placeholder='search...'>
    </input>
    <button onClick={this.searchfunc}>Найти</button>
    <button className='button__sbros' onClick={this.sbros}>Сброс</button>
    </>
    if(this.state.data)
    {
    return(
      <>
      <Pagination
      leftClick = {this.leftClick}
      rightClick = {this.rightClick}/>
      {component2}
      {/* <Search/> */}
      {showv}
      </>
    )
    }
    else{
      return(
        <>
      <h1>Loading...</h1>
      </>
      )
    }
  	
  }
        // return(
        //     <>
        //     <div className='flex-block'>
        //     <div className='grid-container'>
        //         <div id='header'className='grid-elem'>    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, ad. Doloribus rerum aut maiores</div>
        //         <div className='grid-elem'>2</div>
        //         <div className='grid-elem'>3</div>
        //         <div id='test' className='grid-elem'>5</div>
        //         <div className='grid-elem'>4</div>
        //         <div className='grid-elem'>6</div>
        //         <div className='grid-elem'>7</div>
        //         {/* <div className='grid-elem'>8</div> */}
        //     </div>
        //     </div>
        //     </>
        // )
    // }
}