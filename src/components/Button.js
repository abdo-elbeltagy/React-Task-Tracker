
// every thing can be added as prob
const Button = ({text,color,onClick}) => {
  return (
    <button onClick={onClick} style={{backgroundColor:color}} className="btn">{text}</button>
  )
}

Button.defaultProps={
    text:'button',
    color:'red'
}

export default Button