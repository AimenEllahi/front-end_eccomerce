import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import { Container } from "react-bootstrap";

const FullLayout = () => {
  return (
    <main>
      {/********navbar**********/}
      <Navbar />
      {/********Middle Content**********/}
      <Container className=' m-0 p-0 wrapper ' fluid>
        <Outlet />
      </Container>
      <Footer />
    </main>
  );
};

export default FullLayout;
