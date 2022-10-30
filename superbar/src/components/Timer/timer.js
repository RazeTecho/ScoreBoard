import React from 'react';
import './timer.css';

function Timer(props) {
    const [seconds, setSeconds] = React.useState(props.TimerParam.seconds);
    const [minutes, setMinutes] = React.useState(props.TimerParam.minutes);
    
    React.useEffect(()=> {
        let inter = setInterval(() => {
            if(seconds === 59) {
                setSeconds(0);
                setMinutes(minutes => minutes + 1);
            }
            else 
                setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(inter);
    }, [seconds])

    let style = {color: minutes > 45 ? 'orangered' : 'white'};
    return (
        <div className='Timer-Main' style={style}>
            {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
    );
}

export default Timer;