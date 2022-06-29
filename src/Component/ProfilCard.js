import React, { useState } from 'react'
import { Card, Image } from 'react-bootstrap'
import profilImg from '../images/image-jeremy.png'
import './profile.css'
export default function ProfilCard({ state, setState }) {
    // let [state,setState] = useState('Daily')
    
    let [over,setOver] = useState(false)
    let handleStyle = () =>{

    }
    let handleClick = (e) => {
        setState(e.target.innerText.toLowerCase())
    }
    let handleOver = (e)=>{
        setOver(true)
        e.target.classList.add('over')
        e.target.style.cursor = 'pointer'
    }
    let handleOut = (e)=>{
        setOver(false)
        e.target.classList.remove('over')
    }
    return (
        <div style={{height:'100%'}} className='d-flex flex-row flex-md-column'>
            <Card  style={{ width:'fit-content', height:'100%', borderRadius:'20px', backgroundColor:'hsl(235, 46%, 20%)' }}>
                <Card className='p-4' style={{ width:'18rem', height:'23rem',borderRadius:'20px', color:'white', backgroundColor: 'hsl(246, 80%, 60%)' }}>
                    <Image className='border border-3 rounded-circle mb-4' width={'60rem'} src={profilImg}  />
                    <p className='fw-lighter lh-1 p-0'>Report for</p>
                    <p className='pt-0' style={{fontSize:'60px',fontWeight:'300', lineHeight:'4rem'}}>Jeremy Robson</p>
                </Card>
                <div className='p-4 fw-light' style={{ color: 'hsl(236, 100%, 87%)',}}>
                    <p onClick={(e) => handleClick(e)} onMouseOver={(e)=>handleOver(e)} onMouseLeave={(e)=>handleOut(e)} style={state === 'daily'?{color:'white'}:{}}>Daily</p>
                    <p onClick={(e) => handleClick(e)} onMouseOver={(e)=>handleOver(e)} onMouseLeave={(e)=>handleOut(e)} style={state === 'weekly'?{color:'white'}:{}}>Weekly</p>
                    <p onClick={(e) => handleClick(e)} onMouseOver={(e)=>handleOver(e)} onMouseLeave={(e)=>handleOut(e)} style={state === 'monthly'?{color:'white'}:{}}>Monthly</p>
                </div>
            </Card>
        </div>
    )
}
