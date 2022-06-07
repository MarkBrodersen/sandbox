import Hilda from "../components/Hilda";

const Article = ({ lastname }) => {
  return (
    <article>
      <Hilda lastname={lastname} />
    </article>
  );
};

export default Article;
