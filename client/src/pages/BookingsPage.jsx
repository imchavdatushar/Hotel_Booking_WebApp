import React, { useEffect, useState } from 'react';
import AccountNav from '../AccountNav';
import axios from 'axios';
import PlacesImg from './PlacesImg';
import { Link } from 'react-router-dom';
import BookingDates from './BookingDates';

const BookingsPage = () => {

  const [booking, setBooking] = useState('');

  useEffect(() => {
    axios.get('/booking').then(response => {
        setBooking(response.data);
    });
  },[]);

  return (
    <div>
      <AccountNav/>
      {booking?.length > 0 && booking.map(booking => (
        <Link to={`/account/booking/${booking._id}`} className='flex gap-4 bg-gray-200 rounded-2xl overflow-hidden'>
          <div className='w-48'>
            <PlacesImg place={booking.place}/>
          </div>

          <div className='py-3 pr-3 grow'>
            <h2 className='text-2xl'>{booking.place.title}</h2>

          <BookingDates booking={booking} className='mb-2 mt-4 text-gray-500'/>

          <div className="flex gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>
              <span className='text-xl'>
              Total price : ${booking.price}
              </span>
              
              </div>
          </div>
          
        
      </Link>
      ))}
    </div>
  );
}

export default BookingsPage;
