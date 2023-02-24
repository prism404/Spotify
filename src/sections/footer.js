import { FiHeart } from "react-icons/fi";
import { FaRandom } from "react-icons/fa";

import { IoPlaySkipBackSharp } from "react-icons/io5";
import { BsPlayCircleFill } from "react-icons/bs";
import { IoPlaySkipForward } from "react-icons/io5";
import { RiRepeat2Fill } from "react-icons/ri";

import { IconContext } from 'react-icons';

const Footer = () => {
    return (
        <section className="footer">
            <IconContext.Provider value={{ size: 25 }}>
                <div className="lectureEnCours">
                    <img className="conver" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTsqZYP8QvXtE8L854wswNQATiTUGleSZnA&usqp=CAU" alt=""></img>
                    <div className="titreEnCours">
                        Titre
                        <p>Artiste</p>
                    </div>
                    <FiHeart className="like" />
                </div>

                <div className="player">
                    <FaRandom className="random"/>
                    <IoPlaySkipBackSharp className="skipBack" />
                    <BsPlayCircleFill className="play"/>
                    <IoPlaySkipForward className="skipForward" />
                    <RiRepeat2Fill className="repeat"/>
                </div>
                <div className="volume">
                    volume de la musique
                </div>
            </IconContext.Provider>
        </section>
    );
}

export default Footer;