import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='ExploreMenu' id='ExploreMenu'>
    <h1>Explore Our Menu</h1>
    <p className='ExploreMenu__text'>We have a wide variety of dishes to choose from, from our signature dishes to our new additions. Our menu is constantly being updated to ensure that we are always providing our customers with the best possible dining experience.</p>

      <div className='ExploreMenu-list'>
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}  className='ExploreMenu-list__item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
