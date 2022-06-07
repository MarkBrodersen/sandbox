import Wrapper from "./templets/Wrapper";
import Header from "./templets/Header";
import Footer from "./templets/Footer";
import Main from "./templets/Main";

function App() {
  const lastname = "Flexington";

  return (
    <div className="App">
      <Wrapper>
        <Header lastname={lastname} />
        <Main lastname={lastname} />
        <Footer lastname={lastname} />
      </Wrapper>
    </div>
  );
}

export default App;
