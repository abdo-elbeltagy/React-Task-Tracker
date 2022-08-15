// gamed gedannn gedan gedan
// you can set the probs from the header app in the app.js
// you can also set it throgh the defaultProps method
// you can destructure the props using {}

import Button from "./Button"
import propTypes from 'prop-types'


const Header = ({title,onAdd,showAddTask}) => {
  return (
    <header className="header"> 
      <h1>{title} </h1>  
      <Button text={showAddTask?'add':'close'} color={showAddTask?'green':'red'} onClick={onAdd}/>
    </header>
  )
}
Header.defaultProps={
  title : 'Task Tracker',
}

Button.propTypes={
  text:propTypes.string,
  color:propTypes.string,
  onClick:propTypes.func

}
export default Header 