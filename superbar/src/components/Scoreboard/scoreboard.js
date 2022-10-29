import './scoreboard.css'

function Scoreboard(props) {
    const styleLeft = {
        backgroundColor: props.Team.Left.BGColor,
        color: props.Team.Left.FontColor,
    };
    const styleRight = {
        backgroundColor: props.Team.Right.BGColor,
        color: props.Team.Right.FontColor,
    };
  return (
    <div>
        <div className="Scoreboard-Main" >
            <div className='Scoreboard-Team' style={styleLeft}>{props.Team.Left.Name}</div>
            <div className='Scoreboard-Score'>{props.Team.Left.Score}</div>
        </div>
        <div className="Scoreboard-Main" id='Scoreboard-Main-Right'>
            <div className='Scoreboard-Team' style={styleRight}>{props.Team.Right.Name}</div>
            <div className='Scoreboard-Score'>{props.Team.Right.Score}</div>
        </div>
    </div>
  );
}

export default Scoreboard;
