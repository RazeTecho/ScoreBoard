import React from 'react'
import Ball from '../../images/soccerBall.png'
import './scorealert.css'

function ScoreAlert(props) {
    const style = {
        display: props.display.active ? 'block' : 'none'
    }
    return(
        <div>
            <img className='ScoreAlert-Main' style={style} src={Ball} alt='Ball' />
        </div>
    )
}

export default ScoreAlert;