import React from 'react';


const CityContentInList = (props) => ( 
  <div>
    {
      props.record.params.userType==="Elderly"? <h1>Elder Person</h1>:
      <img src={props.record.params.imgName} alt="id img" height= "150px" width= "200px"/>
    }
  </div>
)

export default CityContentInList;