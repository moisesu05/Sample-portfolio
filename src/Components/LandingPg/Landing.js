import React from 'react'
import Wave from 'react-wavify'
// import '../../Styles/Landing/button.css'

function Landing() {
    return (
        <div>
            <section className='container-fluid ld-title section flex-column'>
                <h2 className='p-2 head-sz'>&nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm 
                <span className='highlight'> Moises Ronan Lezano
                </span>
                <br/>I'm a Developer,Editor,Musician</h2>
                <button type='button' className='btn draw-border'>
                    VIEW
                </button>

                <Wave className='sc-h2-bg' fill='#111'
                paused={false}
                options={{
                    height: 30,
                    amplitude: 60,
                    speed: 0.15,
                    points: 6
                }}
            />
            </section>
        </div>
        
    )
}

export default Landing;