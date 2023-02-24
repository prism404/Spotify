import Nav from "../sections/nav";
import MainAlbums from "../sections/albumSection";
import Footer from "../sections/footer";

export default function Albums() {
  return (
    <div>
      <div className="home">
        <Nav />
        <MainAlbums />
      </div>
      <Footer />
    </div>
  );
}
