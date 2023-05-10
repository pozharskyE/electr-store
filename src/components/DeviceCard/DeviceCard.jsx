import React from 'react'
import './deviceCard.css'
import ManualData from '../../ProductData'

const DeviceCard = (props) => {
  let data = props.data
  return (
    <div className='device-card-container'>
      {data.isHit === true && <p>🔥 Bestseller</p>}
      <h1>{data.name}</h1>
      <img src={data.img} alt="device img" />
      <button>Перейти к товару</button>
    </div>
  )
}

export default DeviceCard