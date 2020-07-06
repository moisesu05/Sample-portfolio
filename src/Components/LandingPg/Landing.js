import React from 'react'
import './Landing.css';
import Wave from 'react-wavify'

function Landing() {
    return (
        <div>
            <section className='ld-title section sc-h2'>
            
                <h2>Musician,Editor,Developer</h2>
            </section>
            <Wave className='sc-h2-bg' fill='#111'
                paused={false}
                options={{
                    height: 40,
                    amplitude: 60,
                    speed: 0.15,
                    points: 6
                }}
            />
        </div>
        
    )
}

export default Landing;