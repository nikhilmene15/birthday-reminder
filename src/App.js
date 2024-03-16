import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people, setPeople] = useState(data);
  return (
    <>
    <section className='container'>
    <h2>{people.length}birthday today</h2>
    <List people={people}/>
    <button className='btn' onClick={()=>setPeople([])}>clear All</button>
    </section>
    
    
    </>
  )
}

export default App;
