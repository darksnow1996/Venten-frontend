import React from 'react';
//import logo from './logo.svg';


import CarOwner from '../components/carowner';
import {getFilters,queryOwner} from '../api';
import Loader from 'react-loader-spinner';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';



class Owners extends React.Component {
  state = {
    filters: [],
    filterErr:"",
    queryErr:"",
    activeFilter:"",
    filterIsLoading:true,
    ownerisLoading:false,
    owners:[]

  }

   componentDidMount(){
       const owners = this.getOwners(this.props.match.params.id)      
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
              <div className="filter-header"> <h4 style={{ cursor: "pointer" }} onClick={()=> {this.props.history.goBack()}}><FontAwesomeIcon  icon={faAngleLeft}/>Home</h4></div>
         
            <div className="body-section">
              {!this.state.ownerisLoading ? (this.state.owners ?  (this.state.owners.map((owner) => {
                return   <CarOwner {...owner}/>
              })) : <div>Car Owners not available yet</div>)
              : (<div style={{ display:"flex", justifyContent:"center" }}><Loader type="Oval" color="#000" height="100" width="50" /></div>)}
             
            </div>

</div>
        </div>
  );
}
}

export default Owners;
