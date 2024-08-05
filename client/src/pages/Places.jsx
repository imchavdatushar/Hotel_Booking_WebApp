import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';

import AccountNav from '../AccountNav';

const Places = () => { 

  const [places , setPlaces] = useState([]);

  useEffect ( ()=> {
    axios.get('/user-places').then(({data}) => {
      setPlaces(data);
    });
  }, []);
  return (
    <div>
      <AccountNav/>
         <div className="text-center">
         <Link className='inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full' to={'/account/places/new'}>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
         </svg>
             Add new place
       </Link>
     </div>
     <div className="mt-4">
      {places.length > 0 && places.map(Place => (
        <Link to={'/account/places/'+Place._id} className='flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl '>
          <div className=' flex w-32 h-32 bg-gray-300 grow shrink-0'>
            {Place.photos.length > 0 && (
              <img className='object-cover' src={'http://localhost:4000/uploads/'+Place.photos[0]} alt="" />
            )}
          </div>
          <div className='grow-0 shrink'>
            <h2 className='text-xl'>{Place.title}</h2>
            <p className='text-sm mt-2'>{Place.description}</p>
          </div>
          
        </Link>
      ))}
     </div>
    </div>
  );
}

export default Places;
