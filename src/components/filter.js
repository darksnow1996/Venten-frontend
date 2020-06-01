import React from 'react';

class Filter extends React.Component{

    render(){
       const {start_year,end_year,gender,countries,colors} = this.props;
        return (
             <div className="filter-box"  onClick={() => {this.props.onSelect(this.props.id)}}>
                    <div className="filter-year">
                       {`${start_year}-${end_year}`}

                    </div>
                    <div className="filter-gender">
                        {gender}

                    </div>
                    <div className="filter-countries">
                        {countries.map((country)=> {
                            return (
                                <div className="country">
                           {country}
                        </div>
                            );
                        })}
                       
                    </div>
                    <div className="filter-colors">
                        {colors.map((color)=> {
                            return (
                                <div className="color" style={{backgroundColor: color}}>
                           
                        </div>
                            );
                        })}
                        
                       
                    </div>


                </div>

        );
    }
}

export default Filter;