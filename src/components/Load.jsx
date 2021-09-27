import React from 'react'
import '../styles/index.scss'

const Load = () => {
    return (
        <div>
            <div id="body" className="container">
           <div id='loader'>
               <h1 className='loadhead' >Loading</h1>
            <div class="progress">
                <div class="progress-value"></div>
            </div>
           </div>
       </div>
        </div>
    )
}

export default Load