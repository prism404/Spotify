import logo from '../img/coolLify.png';

import { BsFillPlusSquareFill } from "react-icons/bs";
import { ImHome3 } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import { BsCollectionPlay } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { IconContext } from 'react-icons';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className="leftNav">
      <div className="container">
        <img src={logo} className="coolLify" alt="logo" />
        <IconContext.Provider value={{size: 25}}>
          <div className="leftNav_topIcons">
            <div className="icons">
              <ImHome3 className='p'/>
              <Link to="/" class="navLink">Accueil</Link>
            </div>
            <div className="icons">
              <BsSearch className='p'/>
              <h5>Recherche</h5>
            </div>
            <div className="icons">
              <BsCollectionPlay className='p'/>
              <h5>Bibliothèque</h5>
            </div>
          </div>
          <div className="leftNav_bottomIcons">
            <div className="icons">
              <BsFillPlusSquareFill className='p'/>
              <Link to="/genre" class="navLink">Genre</Link>
            </div>
            <div className="icons">
              <FiHeart className='p'/>
              <Link to="/albums" class="navLink">Albums</Link>
            </div>
          </div>
        </IconContext.Provider>
      </div>
      <hr></hr>
      <div className='playlists'>
        Emplacement des playlists
      </div>
    </section>
  );
}
export default Nav;
