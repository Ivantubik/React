import React from 'react'
import '../style/Components.css'
import SimpleSlider from './Slider'
function SchemaCard({img, title, itemCollection,category,link}) {
  return (
  
    <div className='card_total'>
          <img  src={img} alt="logo"/>
        <div className='card_compon'>
            <h2 className='title_compon'>{title}</h2>
            <hr/>
        <div className='item.compon'>
            <p>ItemCollection:<br></br>{itemCollection}</p>
            <p>Category:<br></br>{category}</p>
        </div>
        <div className='btn.compon'>
           <a href={link}>Explore</a>
        </div>
        </div>
   </div>
  )
}

export default SchemaCard