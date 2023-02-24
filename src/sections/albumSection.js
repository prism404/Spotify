import '../styles/mainHeader.css';
import MainHeader from '../sections/header';
import FetchAlbums from "../components/FetchAlbums";

const MainAlbums = () => {
    return (
        <section className="principal">
            <MainHeader />
            <FetchAlbums />
        </section>
    );
}
export default MainAlbums;