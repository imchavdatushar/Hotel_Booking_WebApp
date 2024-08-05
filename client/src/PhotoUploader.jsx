import React,{ useState } from 'react';

import axios from 'axios';



const PhotoUploader = ({addedPhotos,onChange}) => {

    const [photoLink, setPhotoLink] = useState('');

    async function addPhotoByLink (ev){
        ev.preventDefault();
        const {data : filename} = await axios.post('/upload-by-link' , {link : photoLink});
        onChange(prev => {
          return [...prev , filename];
    
        });
        setPhotoLink('');
       }
    
       function uploadPhoto(ev) {
        const files = ev.target.files;
        const data = new FormData();
        for (let i = 0; i < files.length; i++) {
          data.append('photos', files[i]);
        }
        axios.post('/upload', data, {
          headers: {'Content-type':'multipart/form-data'}
        }).then(response => {
          const {data:filenames} = response;
          onChange(prev => {
            return [...prev, ...filenames];
          });
        })
      }

      function removePhoto(ev,filename){
        ev.preventDefault();
        onChange([...addedPhotos.filter(photo => photo !== filename)])
      }

      function selectAsMainphoto(ev,filename){
        ev.preventDefault();
        onChange([filename , ...addedPhotos.filter(photo => photo !== filename)]);
        
        
      }

  return (
    <>
    <div className='flex gap-2'>
            <input type='text' value={photoLink} onChange={ev=> setPhotoLink(ev.target.value)} placeholder='Add using a link.....jpg'/>
            <button onClick={addPhotoByLink} className='bg-gray-200 px-4 rounded-2xl'>Add&nbsp; photo</button>
            </div>
            <div className='mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              {addedPhotos.length > 0 && addedPhotos.map(link =>(
                <div className='h-32 relative' key={link}>

                  <img className='rounded-2xl h-32 w-full object-cover ' src={'http://localhost:4000/uploads/'+link} alt=''/>

                  <button onClick={ev=> removePhoto(ev,link)} className=' cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl p-2 py-2 px-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                     <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
                    </svg>
                  </button>

                  <button onClick={ev=> selectAsMainphoto(ev,link)} className=' cursor-pointer absolute bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-2xl p-2 py-2 px-3'>
                    
                    {link === addedPhotos[0] && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>                    
                    )}
                    
                    {link !== addedPhotos[0] && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                       </svg>
                    )}
                    
                  </button>
                </div>
              ))}
               <label  className='h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-500'>
                <input type='file' multiple className='hidden' onChange={uploadPhoto}/>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
                  <path fillRule="evenodd" d="M10.75 6h-2v4.25a.75.75 0 0 1-1.5 0V6h1.5V3.704l.943 1.048a.75.75 0 0 0 1.114-1.004l-2.25-2.5a.75.75 0 0 0-1.114 0l-2.25 2.5a.75.75 0 0 0 1.114 1.004l.943-1.048V6h-2A2.25 2.25 0 0 0 3 8.25v4.5A2.25 2.25 0 0 0 5.25 15h5.5A2.25 2.25 0 0 0 13 12.75v-4.5A2.25 2.25 0 0 0 10.75 6ZM7 16.75v-.25h3.75a3.75 3.75 0 0 0 3.75-3.75V10h.25A2.25 2.25 0 0 1 17 12.25v4.5A2.25 2.25 0 0 1 14.75 19h-5.5A2.25 2.25 0 0 1 7 16.75Z" clipRule="evenodd" />
               </svg>
                  Upload
               </label>
            </div>
    </>
  );
}

export default PhotoUploader;
