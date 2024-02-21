import React, { useEffect, useState } from 'react'
import { modelingImagesListArray, portfolioBio } from '../constants'

const Portfolio = () => {

   function uniquePhotographersArray() {
    let uniquePhotographers = new Set();
    modelingImagesListArray.map(image => uniquePhotographers.add(image.photographer))
    let photographersArray = ['All Pictures'];
    uniquePhotographers.forEach(e => {
        return photographersArray.push(e);
    });
    return photographersArray;
   }

   const [photographer,setPhotographer] = useState('All Pictures')
   let s = modelingImagesListArray;
   let filteredPhotographingArray = s.filter(image => {
    if(photographer === 'All Pictures'){
        return image
    }
       return image.photographer === photographer
   });

  return (
    <section className='flex flex-col justify-center items-center'>
        <h2 className='text-2xl p-4 max-w-[500px] text-center text-gold'>{portfolioBio}</h2>
        <select onChange={(e) => setPhotographer(e.target.value)}
        className='mt-8 w-40 bg-gold text-black font-bold text-center'>
            {uniquePhotographersArray().map((photographer) => {
                return (
                    <option key={photographer} value={photographer}>{photographer}</option>
                )
            })}
        </select>

        <div className='mt-8 flex flex-wrap gap-6 items-center justify-center'>
            {filteredPhotographingArray.map((image) => {
                return <img className='max-lg:max-w-[340px] lg:max-w-[400px]' src={image.imageSrc} key={image.id}/>
            })}
        </div>
    </section>
  )
}

export default Portfolio