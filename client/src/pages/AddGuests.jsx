import React from 'react';

function AddGuests() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
    <div className="mb-64">
      <h1 className="text-4xl text-center mb-4">Add Guest</h1>
      <form className='max-w-md mx-auto  ' >
        <input type='text' placeholder='Guest Name'/>
        <input type='email' placeholder='your@email.com' />
       
        <button className="primary">Add Guest</button>
        </form>
    </div>
  </div>
  );
}

export default AddGuests;
