import React from 'react'
import SchemaCard from './SchemaCard';
import Logo from '../images/collection-01.jpg'
import SimpleSlider from './Slider';
import '../style/Components.css'

function ExploreCard() {
    const cardExplore = [
        {img:Logo,title:"Mutant Bored Ape Yacht Club",itemCollection:"324/380",category:"Explore World Wide"},
        {img:Logo,title:"1 World Wide Artwork ground",itemCollection:"310/420",category:"Explore Bored Ape"},
        {img:Logo,title:"Borred ape canal",itemCollection:"426/468",category:"Explore Genesis"},
        {img:Logo,title:"Genessis Collection",itemCollection:"380/394",category:"BLockchain",link:"Explore Mutant"}

    ]
//     let collection = []
//     console.log(collection[1]);
//     const collFunc = (cardExplore) => {
//      for (let i = 0; i < cardExplore.length; i++) {
//         const element = cardExplore[i];
//         console.log(element);
//         collection.push((
//         <div>{element.title + element.itemCollection}</div>
//         ))
       
//     }
//     return collection
// }

  return (
    <div>
        <h1>MainPage</h1>
            <div className='cards'>
                {cardExplore.map((item, key) =>{
    console.log(item.title);
    return (
       <SimpleSlider
       img={item.img}
        key={key}
       title={item.title}
       itemCollection={item.itemCollection}
       category={item.category}
       link={item.link}
       />
    )
})}
                {/* {collFunc(cardExplore)} */}

            </div>
    </div>
  )
}

export default ExploreCard