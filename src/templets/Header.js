import Billy from "../components/Billy";

const Header = ({ lastname }) => {
  return (
    <div>
      <Billy lastname={lastname} />
    </div>
  );
};

export default Header;
