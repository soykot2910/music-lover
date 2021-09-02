import React from "react";
import Container from "@material-ui/core/Container";
import Header from "./components/Header/Header";
import AllMusic from "./components/Music/AllMusic";

export default function App() {
  return (
    <>
      <Header />
      <Container>
        <AllMusic />
      </Container>
    </>
  );
}
