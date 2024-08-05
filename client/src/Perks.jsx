import React from 'react';



const Perks = ({selected, onChange}) => {

  
    function handlecbClick(ev) {
      const {checked,name} = ev.target;
      if (checked) {
        onChange([...selected,name]);
      } else {
        onChange([...selected.filter(selectedName => selectedName !== name)]);
      }
    }
  
  return (
    <>
          <label className='border p-4 flex rounded-2xl gap-2 item-center cursor-pointer'>
                <input type='checkbox' checked={selected.includes('wifi')} name="wifi" onChange = {handlecbClick}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                   <path fillRule="evenodd" d="M.676 6.941A12.964 12.964 0 0 1 10 3c3.657 0 6.963 1.511 9.324 3.941a.75.75 0 0 1-.008 1.053l-.353.354a.75.75 0 0 1-1.069-.008C15.894 6.28 13.097 5 10 5 6.903 5 4.106 6.28 2.106 8.34a.75.75 0 0 1-1.069.008l-.353-.354a.75.75 0 0 1-.008-1.053Zm2.825 2.833A8.976 8.976 0 0 1 10 7a8.976 8.976 0 0 1 6.499 2.774.75.75 0 0 1-.011 1.049l-.354.354a.75.75 0 0 1-1.072-.012A6.978 6.978 0 0 0 10 9c-1.99 0-3.786.83-5.061 2.165a.75.75 0 0 1-1.073.012l-.354-.354a.75.75 0 0 1-.01-1.05Zm2.82 2.84A4.989 4.989 0 0 1 10 11c1.456 0 2.767.623 3.68 1.614a.75.75 0 0 1-.022 1.039l-.354.354a.75.75 0 0 1-1.085-.026A2.99 2.99 0 0 0 10 13c-.88 0-1.67.377-2.22.981a.75.75 0 0 1-1.084.026l-.354-.354a.75.75 0 0 1-.021-1.039Zm2.795 2.752a1.248 1.248 0 0 1 1.768 0 .75.75 0 0 1 0 1.06l-.354.354a.75.75 0 0 1-1.06 0l-.354-.353a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
                <span>Wifi</span>
              </label >
              <label className='border p-4 flex rounded-2xl gap-2 item-center cursor-pointer'>
                <input type='checkbox' checked={selected.includes('Free parking spot')} name="Free parking spot" onChange = {handlecbClick}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path d="M6.5 3c-1.051 0-2.093.04-3.125.117A1.49 1.49 0 0 0 2 4.607V10.5h9V4.606c0-.771-.59-1.43-1.375-1.489A41.568 41.568 0 0 0 6.5 3ZM2 12v2.5A1.5 1.5 0 0 0 3.5 16h.041a3 3 0 0 1 5.918 0h.791a.75.75 0 0 0 .75-.75V12H2Z" />
                    <path d="M6.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM13.25 5a.75.75 0 0 0-.75.75v8.514a3.001 3.001 0 0 1 4.893 1.44c.37-.275.61-.719.595-1.227a24.905 24.905 0 0 0-1.784-8.549A1.486 1.486 0 0 0 14.823 5H13.25ZM14.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                </svg>
                <span>Free parking spot</span>
              </label>
              <label className='border p-4 flex rounded-2xl gap-2 item-center cursor-pointer'>
                <input type='checkbox' checked={selected.includes('TV')} name="TV" onChange = {handlecbClick}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path d="M4 5h12v7H4V5Z" />
                  <path fillRule="evenodd" d="M1 3.5A1.5 1.5 0 0 1 2.5 2h15A1.5 1.5 0 0 1 19 3.5v10a1.5 1.5 0 0 1-1.5 1.5H12v1.5h3.25a.75.75 0 0 1 0 1.5H4.75a.75.75 0 0 1 0-1.5H8V15H2.5A1.5 1.5 0 0 1 1 13.5v-10Zm16.5 0h-15v10h15v-10Z" clipRule="evenodd" />
                </svg>
                <span>TV</span>
              </label>
              <label className='border p-4 flex rounded-2xl gap-2 item-center cursor-pointer'>
                <input type='checkbox' checked={selected.includes('Radio')} name="Radio" onChange = {handlecbClick}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M17.45 3.473a.75.75 0 1 0-.4-1.446L5.313 5.265c-.84.096-1.671.217-2.495.362A2.212 2.212 0 0 0 1 7.816v7.934A2.25 2.25 0 0 0 3.25 18h13.5A2.25 2.25 0 0 0 19 15.75V7.816c0-1.06-.745-2-1.817-2.189a41.12 41.12 0 0 0-5.406-.59l5.673-1.564ZM16 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM14.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.26-5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V11Zm2.75-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H8a.75.75 0 0 0 .75-.75V11a.75.75 0 0 0-.75-.75h-.01Zm-1.75-1.5A.75.75 0 0 1 6.99 8H7a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75v-.01Zm3.583.42a.75.75 0 0 0-1.06 0l-.007.007a.75.75 0 0 0 0 1.06l.007.007a.75.75 0 0 0 1.06 0l.007-.007a.75.75 0 0 0 0-1.06l-.007-.008Zm.427 2.08A.75.75 0 0 1 11 12v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V12a.75.75 0 0 1 .75-.75h.01Zm-.42 3.583a.75.75 0 0 0 0-1.06l-.007-.007a.75.75 0 0 0-1.06 0l-.007.007a.75.75 0 0 0 0 1.06l.007.008a.75.75 0 0 0 1.06 0l.008-.008Zm-3.59.417a.75.75 0 0 1 .75-.75H7a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75v-.01Zm-1.013-1.484a.75.75 0 0 0-1.06 0l-.008.007a.75.75 0 0 0 0 1.06l.007.008a.75.75 0 0 0 1.061 0l.007-.008a.75.75 0 0 0 0-1.06l-.007-.007ZM3.75 11.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V12a.75.75 0 0 1 .75-.75h.01Zm1.484-1.013a.75.75 0 0 0 0-1.06l-.007-.007a.75.75 0 0 0-1.06 0l-.007.007a.75.75 0 0 0 0 1.06l.007.007a.75.75 0 0 0 1.06 0l.007-.007ZM7.24 13a.75.75 0 0 1 .75-.75H8a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V13Zm-1.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75V13a.75.75 0 0 0-.75-.75h-.01Z" clipRule="evenodd" />
                </svg>
                <span>Radio</span>
              </label >
              <label className='border p-4 flex rounded-2xl gap-2 item-center cursor-pointer'>
                <input type='checkbox' checked={selected.includes('Pets')} name="Pets" onChange = {handlecbClick}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.536-4.464a.75.75 0 1 0-1.061-1.061 3.5 3.5 0 0 1-4.95 0 .75.75 0 0 0-1.06 1.06 5 5 0 0 0 7.07 0ZM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5Zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5Z" clipRule="evenodd" />
                </svg>
                <span>Pets</span>
              </label>
              <label className='border p-4 flex rounded-2xl gap-2 item-center cursor-pointer'>
                <input type='checkbox' checked={selected.includes('Private enterance')} name="Private enterance" onChange = {handlecbClick}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z" clipRule="evenodd" />
                </svg>
                <span>Private enterance</span>
              </label>
    </>
  );
}

export default Perks;
