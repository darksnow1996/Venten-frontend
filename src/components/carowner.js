import React from 'react';
import car from '../car.png';

class CarOwner extends React.Component{

     truncateString=(str, num)=> {
        // If the length of str is less than or equal to num
        // just return str--don't truncate it.
        if (str.length <= num) {
            return str
        }
        // Return str truncated with '...' concatenated to the end of str.
        return str.slice(0, num) + '...'
    }

    render(){

        return(
             <div className="owner-card">
                    <div className="card-image">
                        <img alt="Car" src={car} className="card-image-style" />


                    </div>
                    <div className="card-info">
                        <div className="card-name">
                           {`${this.props.firstname} ${this.props.lastname}`}

                        </div>
                        <div className="card-branding">
                            <div className="brand">
                                <span className="color-grey">
                                    Brand
                                </span>
                                <span >
                                    {this.props.carModel}

                                </span>

                            </div>
                            <div className="year">
                                <span className="color-grey">
                                    Year
                            
                                </span>
                                <span>
                                    {this.props.carModelYear}
                            
                                </span>
                            
                            </div>
                            <div className="card-color">
                                <span className="color-grey">
                                    Color                            
                                </span>
                                <span className="card-color-style" style={{ backgroundColor: this.props.carColor }}>
                            
                                </span>
                            
                            </div>


                        </div>
                        <div className="card-country">
                            <div className="card-info-country">
                                <span className="color-grey">
                                    Country
                            
                                </span>
                                <span>
                                   {this.props.country}
                            
                                </span>
                            
                            </div>
                            <div className="gender">
                                <span className="color-grey">
                                    Gender
                            
                                </span>
                                <span>
                                   {this.props.gender}
                            
                                </span>
                            
                            </div>
                            <div className="job">
                                <span className="color-grey">
                                    Job
                            
                                </span>
                                <span>
                                    {this.props.jobTitle}
                            
                                </span>
                            
                            </div>


                        </div>

                        <div className="card-email">
                            Email: {this.props.email}

                        </div>
                        <div className="card-bio">
                            Bio: {this.truncateString(this.props.bio,30)}

                        </div>


                    </div>

                </div>

        );
    }
}

export default CarOwner;