import React from 'react'
import './Info.css'

const Info = (props) =>{
  return(
    <div>
                    <p className='fullName'> {props.firstName} {props.lastName} </p>
                    <p className='searchingPosition'>{props.position}</p>
                    <div>
                        <span style={{display: props.mobile ? '' : 'none' }}>
                             <i 
                               class="fas fa-phone" 
                               style={{color:'blue' , paddingRight:'5px'}}> 

                               </i>
                              {props.mobile} </span>
                        <span style={{display: props.placeLiving ? '' : 'none' }}>
                             <i 
                              class="fa fa-map-marker" 
                              aria-hidden="true" 
                              style={{color:'blue' , paddingRight:'5px' , paddingLeft:'20px'}}>

                              </i>
                             {props.placeLiving} </span>
                        <p style={{display: props.email ? '' : 'none' }}>
                             <i 
                               class="fas fa-at"
                                style={{color:'blue' , paddingRight:'5px' }} >

                                </i>
                             {props.email}</p>
                    </div>
 
                   </div>
  )
}

export default Info