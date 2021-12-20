import React from 'react'
import Navbar from './Navbar'
import resume from './Subramanyam resume 2021.doc'

export default function Profile() {
    return (
        <div className = 'profile-container'>
            
           <Navbar/>
           <div className = 'container-fluid profilesec'>
            <div className = 'row'>
                <div className = 'col-sm-7 prof-bio'>
                    <p className = 'topline1'>Hello, I am <span className = 'topline1span'>Subrahmanyam</span></p>
                    <p className = 'prof-role'>Full stack web developer</p>
                    <p className = 'prof-desc'>Knack of building applications with front and backend operations</p>
                    <div className = 'btn-sec'>
                        <ul className = 'btn-parent' id ='btnresumeid'>
                            <li className = 'btn-item'><a href = '#contactid'><button className = 'buttonstyle'>Hire me</button></a></li>
                            <li className = 'btn-item'><a href ={resume}><button className = 'buttonstyle1'>Resume</button></a></li>
                        </ul>
                    </div>
                    
                </div>
                <div className = 'col-sm-5'>
                   <div className = 'profpic-parent'>
                       <img className = 'profpic' src = 'https://media-exp1.licdn.com/dms/image/C5603AQG6siAwCeGbOw/profile-displayphoto-shrink_800_800/0/1637613643434?e=1643241600&v=beta&t=10-FnVfgZvNoOjea-GYi1Td8Xd5kdYGk1vTZ55hstY0' 
                       alt = 'Subbu'></img>
                   </div>
                </div>
            </div>
           </div>
        </div>
        
    )
}
