import * as React from "react";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Fotter from "./components/Fotter/Fotter";
interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header />
      <Container />
      <Fotter></Fotter>
    </>
  );
};

export default App;