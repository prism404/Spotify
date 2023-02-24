// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

import "./styles/nav.css";
import "./styles/home.css";
import "./styles/principal.css";
import "./styles/footer.css";

import Nav from "./sections/nav";
import Principal from "./sections/principal";
import Footer from "./sections/footer";

function App() {
  return (
    <div>
      <div className="home">
        <Nav />
        <Principal />
      </div>
      <Footer />
    </div>
  );
}

export default App;
