import React from 'react'
import '../style/Components.css'

function Header(props) {
  return (
    <div className='header_div'>
        <div className='header_title'>
        <p>{props.first}</p>
        <h1 className='title'>{props.title}</h1>
        <p>Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML
        CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty
        can be freely downloaded from TemplateMo's free css templates.
        </p>
        </div>
        <div className='btn_header'>
            <a href='../.explore.js'>Explore TOP NFTs</a>
            <a href='https://www.youtube.com/templatemo'>Watch our videos</a>
        </div>

    </div>
  )
}

export default Header
