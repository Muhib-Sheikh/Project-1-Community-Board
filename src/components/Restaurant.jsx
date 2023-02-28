import React from 'react'

const Restaurant = (props) => {
  return (
    <div className='Restaurant'>
      <img src={props.image} />
      <h2>{props.name}</h2>
      <h3>{props.type}</h3>
      <h4>{props.desc}</h4>
      <a href={props.menu}>
        <button>View Menu</button>
      </a>
    </div>
  )
}

export default Restaurant;