import { useState } from 'react';

import './App.css';
import { user } from './movie';


function App() {
  const [ movies, setMovies] = useState("");

 
  return (
    <div >
      <div className='header'>
        <input type="text" placeholder=" Enter movie name " className="search" onChange={(e) => setMovies(e.target.value)} />

      </div>
    
                
      <div className="small-container">
                   
          <div className="row" >
            {user.filter((data)=>data.Title.toLowerCase().includes(movies)).map((data)=>(
              <div className="column">
              
                <img className="poster " src={data.Poster} alt="poster" />
              
        
                <h3 key={data.Title} ></h3>  
              </div>
            ))}
          </div>
      </div>
    
    
      
    </div>
    
  );
}

export default App;
