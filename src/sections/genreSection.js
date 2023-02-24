import '../styles/mainHeader.css';
import MainHeader from '../sections/header';
import FetchGenre from "../components/FetchGenre";

const MainGenre = () => {
    return (
        <section className="principal">
            <MainHeader />
            <FetchGenre />
        </section>
    );
}
export default MainGenre;