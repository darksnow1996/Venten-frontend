import React from 'react';
//import logo from './logo.svg';
import Filter from '../components/filter';
import {getFilters,queryOwner} from '../api';
import Loader from 'react-loader-spinner';
import { Link,Redirect,useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSortAmountDown} from '@fortawesome/free-solid-svg-icons';




class Filters extends React.Component {
  state = {
    filters: [],
    filterErr:"",
    queryErr:"",
    activeFilter:"",
    filterIsLoading:true,
   

  }
  

  async componentDidMount(){
    try{
       // console.log(this.props);
      const filters = await getFilters();
     // console.log(filters);
       this.setState({
         filters,
         filterIsLoading:false
       })
    } 
    catch(error) {
      // this.setState({
      //   filterErr:"Unable to get filters"
      // })

    } 

  }

  goToOwners = (id)=> {
    return this.props.history.push(`/filters/owners/${id}`);
      
  }

  
  render(){
  return (
     <div className="container">
        
            <div className="body-wrapper">
                 <div className="filter-header"> <h4><FontAwesomeIcon style={{ paddingRight:"3px" }} icon={faSortAmountDown}/> Filter</h4></div>
              
            <div className="filter-section">
                
                {!this.state.filterIsLoading ?  
                (this.state.filters.length > 0 ? this.state.filters.map((filter,index)=> {
                  return  <Filter  onSelect={this.goToOwners} key={filter.id} {...filter} id={filter.id} />
                })
                : <div>No Filter Data Found</div>)
                :
                (<div style={{ display:"flex", justifyContent:"center" }}><Loader type="Oval" color="#000" height="100" width="50" /></div>)}
              
            </div>



</div>
        </div>
  );
}
}

export default Filters;
