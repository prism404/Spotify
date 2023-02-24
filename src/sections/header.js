import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IconContext } from 'react-icons';
import Search from '../sections/searchBar';


const MainHeader = () => {
    return (
        <section className="mainHeader">
            <div className="arrowNav">
                <IconContext.Provider value={{size: 35}}>

                    <BsFillArrowLeftCircleFill className="arrowNavLeft"/>
                    <BsFillArrowRightCircleFill className="arrowNavRight"/>
                </IconContext.Provider>
            </div>
            <Search />
            <nav className='navBar'>
                <ul>
                    <li><a href={"oui.gn"}>Premium</a></li>
                    <li><a href={"oui.gn"}>Assistance </a></li>
                    <li><a href={"oui.gn"}>Télécharger</a></li>
                    <li><a href={"oui.gn"}>S'inscrire</a></li>
                </ul>
            </nav>
        </section>
    );
}
export default MainHeader;