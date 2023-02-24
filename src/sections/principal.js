import '../styles/mainHeader.css';
import MainHeader from '../sections/header';
import FetchArtists from "../components/FetchArtists";

const Principal = () => {
    return (
        <section className="principal">
            <MainHeader />
            <FetchArtists />
        </section>
    );
}
export default Principal;