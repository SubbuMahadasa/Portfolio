import React , {useState} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

import './Resume.css'
export default function Resume() {
    const [btn1 , setbtn1] = useState(true);
    const [btn2 , setbtn2] = useState(false);
    const [btn3 , setbtn3] = useState(false);
    const [btn4 , setbtn4] = useState(false);
    const [btn5 , setbtn5] = useState(false);
    const updbtn1 = () => {
        setbtn1(true)
        setbtn2(false)
        setbtn3(false)
        setbtn4(false)
        setbtn5(false)
       
    }
    const updbtn2 = () => {
        setbtn1(false)
        setbtn2(true)
        setbtn3(false)
        setbtn4(false)
        setbtn5(false)
    }
    const updbtn3 = () => {
        setbtn1(false)
        setbtn2(false)
        setbtn3(true)
        setbtn4(false)
        setbtn5(false)
    }
    const updbtn4 = () => {
        setbtn1(false)
        setbtn2(false)
        setbtn3(false)
        setbtn4(true)
        setbtn5(false)
    }
    const updbtn5 = () => {
        setbtn1(false)
        setbtn2(false)
        setbtn3(false)
        setbtn4(false)
        setbtn5(true)
       
    }
    let inputStyle = {
           
            border: '1px solid black'
        
      };
    return (
        <div className = 'container'>
            <p className = 'aboutmehead'>Resume</p>
            {/* <hr class="center-diamond"/> */}
            <div className = 'row'>
                {/* <div className = 'col-sm-1 sideicons'>
               
                </div> */}
                <div className = 'col-sm-3 box-sh'>
                    <div className = 'sideicons'>
                <ul className = 'sidebar-ul-icon'>
                            <li className = 'sidebar-liicon'><i class="fas fa-user-graduate"></i></li>
                            <li className = 'sidebar-liicon'><i class="fas fa-history"></i></li>
                            <li className = 'sidebar-liicon'><i class="fas fa-laptop-code"></i></li>
                            <li className = 'sidebar-liicon'><i class="fas fa-chart-bar"></i></li>
                            <li className = 'sidebar-liicon'><i class="fas fa-palette"></i></li>
                           
                        </ul>
                        <ul className = 'sidebar-ul'>
                            <li style = { btn1 ? {backgroundColor : '#112240' , color : 'white'} : {backgroundColor : 'white' ,  color : '#112240'}} className = 'sidebar-li' onClick = {updbtn1}>Education</li>
                            <li style = { btn2 ? {backgroundColor : '#112240' , color : 'white'} : {backgroundColor : 'white' ,  color : '#112240'}} className = 'sidebar-li' onClick = {updbtn2}>Experience</li>
                            <li style = { btn3 ? {backgroundColor : '#112240', color : 'white'} : {backgroundColor : 'white',  color : '#112240'}} className = 'sidebar-li' onClick = {updbtn3}>Skills</li>
                            <li style = { btn4 ? {backgroundColor : '#112240', color : 'white'} : {backgroundColor : 'white',  color : '#112240'}} className = 'sidebar-li' onClick = {updbtn4}>Projects</li>
                            <li style = { btn5 ? {backgroundColor : '#112240', color : 'white'} : {backgroundColor : 'white',  color : '#112240'}} className = 'sidebar-li' onClick = {updbtn5}>Interests</li>
                        </ul>
                        </div>
                </div>
                <div className = 'col-sm-9 resumebox'>
                    {
                        btn1 && <div className = 'button1data'>
                        <div className = 'resudiv1'>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  KIET Engineering College <span><button className = 'buttonstyle1221'>2016 - 2020</button></span></p>
                            <p className = 'instedu'>&nbsp;&nbsp;&nbsp;&nbsp;BACHELOR OF SCIENCE INFORMATION TECHNOLOGY</p>
                        </div>
                        <div className = 'resudiv1'>
                            <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;Vidyanidhi Junior college<span><button className = 'buttonstyle1221'>2014 - 2016</button></span></p>
                            <p className = 'instedu'>&nbsp;&nbsp;&nbsp;&nbsp;INTERMEDIATE EDUCATION</p>
                        </div>
                        <div className = 'resudiv1'>
                            <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;Vishali (E.M) High School<span><button className = 'buttonstyle1221'>2009 - 2014</button></span></p>
                            <p className = 'instedu'>&nbsp;&nbsp;&nbsp;&nbsp;HIGH SCHOOL EDUCATION</p>
                        </div>
                    </div>
}
{
                    btn2 && 
                    <div className = 'button2data'>
                        
                        <div className = 'resudiv1'>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  Multiplier AI Solutions<span><button id = 'msexpbtn' className = 'buttonstyle122'>July 2020 - January 2022</button></span></p>

                            <p className = 'instedu' id = 'msole'>SOFTWARE APPLICATION DEVELOPER</p>
                            <br/>
                            <p className = 'work-desc'><b>I have developed below listed Projects</b></p>
                            <p className = 'work-desc1'><i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Developed role based whatsapp campaign tool using PHP which works by uploading bulk mobile numbers through excel file
                            <br/><i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Developed a role based user management dashboards using jQuery AJAX , PHP
                            <br/><i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Developed Google My Business Product used for doctors ratings, rankings and to create GMB account using JavaScript, PHP
                            <br/><i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Developed few static landing pages with responsive and interactive user interface
                            <br/><i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Developed few dynamic web applications using React JS
                            <br/><i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Developed user based login and dashboard using MERN stack
                            <br/><i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Developed  REST API’s for USI Mobile App using PHP
                            <br/><i class="fas fa-hand-point-right"></i>&nbsp;&nbsp;Developed few Ecommerce web applications using wordpress
</p>
                        </div>
                       

                </div>
}
{
                    btn3 && 
                    <div className = 'button3data'>
                   <div className = 'row resudiv1'>
                        <div className = 'col-sm-6'>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  JavaScript</p>
                        <ProgressBar completed={70} bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  PHP</p>
                        <ProgressBar completed={80} bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  MySQL</p>
                        <ProgressBar completed={65} bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; jQuery </p>
                        <ProgressBar completed={60} bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Bootstrap </p>
                        <ProgressBar completed={80} bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div>
                        <br/>
                                     </div>
                        <div className = 'col-sm-6'>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  ReactJS</p>
                        <ProgressBar  completed={85}  bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  Material UI</p>
                        <ProgressBar  completed={75}  bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  NodeJS</p>
                        <ProgressBar  completed={65}  bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  ExpressJS</p>
                        <ProgressBar  completed={60}  bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div><br/>
                        <div className = 'skill' style = {{width : '60%'}}>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  MongoDB</p>
                        <ProgressBar  completed={60}  bgColor	= 'rgb(17, 34, 64)' baseBgColor = 'rgb(193 193 193)' />
                        </div>
                        
                        </div>
                   </div>
                </div>
}
{
                    btn4 && 

                    <div className = 'button4data'>
                      <div className = 'resudiv1'>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp;  User role based whatsapp & SMS campaign tool  <span><button className = 'buttonstyle122'>2020</button></span></p>
                            <p className = 'instedu prodata'> Developed role based whatsapp campaign tool using PHP which works by uploading bulk mobile numbers through excel file. (HTML, CSS, Bootstrap , JavaScript , jQuery , PHP, MySQL )</p>
                        </div>
                        <div className = 'resudiv1'>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Developer's management application (MERN stack) <span><button className = 'buttonstyle122'>2021</button></span></p>
                            <p className = 'instedu prodata'> Developed a user based login and dashboard management application which allows user to give a reviews to the developers (ReactJS , Material UI , NodeJS , ExpressJS , MongoDB)</p>
                        </div>
                        <div className = 'resudiv1'>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Personal Portfolio Website <span><button className = 'buttonstyle1221'>2021</button></span></p>
                            <p className = 'instedu prodata'> A personal portfolio website to showcase all my details and projects at one place (ReactJS , Bootstrap , NodeJS)</p>
                        </div>
                   </div>
}
{
                    btn5 &&
                    <div className = 'button5data'>
                    <div className = 'resudiv1'>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Teaching </p>
                            <p className = 'instedu'> Apart from being a tech enthusiast and a code writer , i also love to teach people what i know simply because i believe in sharing</p>
                        </div>
                        <div className = 'resudiv1'>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Music </p>
                            <p className = 'instedu'> Listening to soothing music is something i can never compromise with skimming through spotify's pop songs charts is at times the best stress reliever that i can get my hands on</p>
                        </div>
                        <div className = 'resudiv1'>
                        <p className = 'instname'><i class="fas fa-circle"></i>&nbsp;&nbsp;&nbsp; Competetive Gaming </p>
                            <p className = 'instedu'> I like to challenge my reflexes a lot while competeting in cricket , pushing the rank and having interactive gaming sessions excites me the most </p>
                        </div>
                </div>

                    }
                   
                  
                  
                   
                   
                </div>
            </div>
        </div>
    )
}
