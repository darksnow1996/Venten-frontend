import React from 'react';
//import logo from './logo.svg';

import './style.css';
import Filter from './components/filter';
import CarOwner from './components/carowner';
import {getFilters,queryOwner} from './api';
import Loader from 'react-loader-spinner';

class App extends React.Component {
  state = {
    filters: [],
    filterErr:"",
    queryErr:"",
    activeFilter:"",
    filterIsLoading:true,
    ownerisLoading:false,
    owners:[]

  }

  async componentDidMount(){
    try{
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

  getOwners = async(id)=> {
    this.setState({
      ownerisLoading:true
    });
    try{
    const owners = await queryOwner(id);
  //  console.log(owners);
    this.setState({
      owners,
      ownerisLoading:false

    });
  }
  catch(error){
    this.setState({
      queryErr: "Unable to get Car Owners data"
    });
  }
  }
  render(){
  return (
     <div className="container">
            <div className="body-wrapper">
            <div className="filter-section">
                <div className="filter-header"> <i className="fa fa-sort-amount-desc"></i> Filter</div>
                {!this.state.filterIsLoading ?  
                (this.state.filters.length > 0 ? this.state.filters.map((filter,index)=> {
                  return  <Filter  onSelect={this.getOwners} key={filter.id} {...filter} id={index} />
                })
                : <div>No Filter Data Found</div>)
                :
                (<div style={{ display:"flex", justifyContent:"center" }}><Loader type="ThreeDots" color="#000" height="100" width="100" /></div>)}
              
            </div>

            <div className="body-section">
              {!this.state.ownerisLoading ? (this.state.owners ?  (this.state.owners.map((owner) => {
                return   <CarOwner {...owner}/>
              })) : <div>Car Owners not available yet</div>)
              : (<div style={{ display:"flex", justifyContent:"center" }}><Loader type="ThreeDots" color="#000" height="100" width="100" /></div>)}
             
            </div>

</div>
        </div>
  );
}
}

export default App;
