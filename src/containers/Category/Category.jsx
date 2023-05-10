import React from 'react'
import './category.css'
import { DeviceCard } from './../../components'
import './../../ProductData'
import ManualData from './../../ProductData'

const Category = () => {
    const data = ManualData()
    return (
        <div className='category-container'>
            <h1>Smartphones</h1>
            <h3>Best value for money</h3>
            <div className='flex-container'>
                <DeviceCard data={data[0]} />
                <DeviceCard data={data[1]} />
                <DeviceCard data={data[2]} />
                <DeviceCard data={data[0]} />
                <DeviceCard data={data[1]} />
                <DeviceCard data={data[2]} />

            </div>
        </div>
    )
}

export default Category