import React from 'react'
import Test from './Test';

 const Person = ({person}) => {
    console.log(person);
    
  return (
    <>
    <div>

<h1>{person.fullName}</h1>

<h1>{person.bio}</h1>

<img width="100px" height="100px" src={person.imgSrc}/>

<h1>{person.profession}</h1>


    </div>
  
    </>
    

  )
}
export default Person;
