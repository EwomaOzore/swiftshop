import React from 'react'
import Ddata from './Ddata'

const Dcard = () => {
    return (
        <>
            <div className='content grid product'>
                {Ddata.map((val, index) => {
                    return (
                        <>
                            <div className='product' key={index}>
                                <div className='box'>
                                    <div className='img'>
                                        <img src={val.cover} width='100%' alt='' />
                                    </div>
                                    <h4>{val.name}</h4>
                                    <span>{val.price}</span>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Dcard