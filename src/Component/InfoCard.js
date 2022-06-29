import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'

import './infoCard.css'

export default function InfoCard({data, state}) {
    const {current,previous} = data.timeframes[state]
    let handleOver=(e)=>{
        e.currentTarget.style.cursor = 'pointer'
        e.target.style.color = 'white'
    }
    let handleOut=(e)=>{
        e.target.style.color = 'hsl(236, 100%, 87%)'
    }
    let handleCardOver=(e)=>{
        e.currentTarget.style.cursor = 'pointer'
        e.currentTarget.style.backgroundColor = 'hsl(235, 45%, 61%)'
    }
    let handleCardOut=(e)=>{
        e.currentTarget.style.backgroundColor = 'hsl(235, 46%, 20%)'

    }
    let img = (title)=>{
        switch (title) {
            case 'Work':
                return <div id='Log1' >
                    {/* <Image src={Log1}/> */}
                </div>
            case 'Play':
                return <div id='Log2'>
                    {/* <Image src={Log2}/> */}
                </div>
            case 'Study':
                return <div id='Log3'>
                    {/* <Image src={Log3}/> */}
                </div>
            case 'Exercise':
                return <div id='Log4'>
                    {/* <Image src={Log4}/> */}
                </div>
            case 'Social':
                return <div id='Log5'>
                    {/* <Image src={Log5}/> */}
                </div>
            case 'Self Care':
                return <div id='Log6'>
                    {/* <Image src={Log6}/> */}
                </div>
            default:
                break;
        }
    }
    return (
        <div style={{height:'fit-content',position:'relative'}}  className='position-relative my-2 mx-md-2'>
            {img(data.title)}
            <Card onMouseOver={(e)=>handleCardOver(e)} onMouseLeave={(e)=>handleCardOut(e)} style={{color:'white', backgroundColor:'hsl(235, 46%, 20%)',width:'18rem',borderRadius:'20px',zIndex:4}} className='pt-3 ps-3' body>
            <p className='fs-6 fw-lighter'>{data.title}</p>
            <p className='fs-1 fw-light'>{current}hrs</p>
            <p style={{color:'hsl(236, 100%, 87%)'}} className='fs-6 fw-lighter'>Last week - {previous}hrs</p>
            <p style={{color:'hsl(236, 100%, 87%)',position:'absolute', top:'1.5rem', right:'2rem'}} onMouseOver={(e)=>handleOver(e)} onMouseLeave={(e)=>handleOut(e)} >...</p>    
            </Card>
            
        </div>
    )
}
