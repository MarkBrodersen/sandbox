import Selvador from "../components/Selvador";
import Article from "./Article";

const Main = ({ lastname }) => {
  return (
    <main>
      <Selvador lastname={lastname} />
      <Article lastname={lastname} />
    </main>
  );
};

export default Main;
