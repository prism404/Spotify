import Nav from "../sections/nav";
import MainGenre from "../sections/genreSection";
import Footer from "../sections/footer";

export default function Genre() {
  return (
    <div>
      <div className="home">
        <Nav />
        <MainGenre />
      </div>
      <Footer />
    </div>
  );
}
