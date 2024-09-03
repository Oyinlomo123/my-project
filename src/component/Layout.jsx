import { Link, Outlet } from "react-router-dom"


const Layout = ({title, content, button}) => {
  return (
    <div >
    {title && <h2>{title}</h2>}
    {content && <h5>{content}</h5>}
    {button && <button>{button}</button>}
    </div>
    
  )
}

export default Layout