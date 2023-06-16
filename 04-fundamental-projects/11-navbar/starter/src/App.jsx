import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import {links, social} from './data';
import logo from './logo.svg'

const App = () => {

  const [press, setPress] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const handle = () =>{
    //h = linksRef.current.getBoundingClientRect().height;
    setPress(!press);
  }

  const linkStyles = {
    height: press ? `${linksRef.current.getBoundingClientRect().height}px` : '0px',
  };
  return <main>
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img className="logo" src={logo} alt="logo" />
          <button className="nav-toggle" onClick={handle}> <FaBars /> </button>
        </div>
        <div className="links-container" ref={linksContainerRef} style={linkStyles}>
          <ul ref={linksRef} className="links">
            {links.map(link => {
              const {id, url, text} = link;
              return <li key={id}>
                  <a href={url}>{text}</a>
                </li>
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(socialIcon => {
            const {id, url, icon} = socialIcon;
            return (
              <li key={id}><a href={url}>{icon}</a></li>
            )
          })}
        </ul>
      </div>
    </nav>
  </main>
};
export default App;
