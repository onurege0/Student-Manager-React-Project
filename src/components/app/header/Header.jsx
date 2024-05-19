import propTypes, { string } from "prop-types";

const Header = (/*{ title, navElements }*/ props) => {
  const {title, navElements} = props;
  return (
    <header>
      <div className="header-left">
        <span>{title}</span>
      </div>
      <div className="header-right">
        {navElements.map((navElement) => {
          return (
            <a key={navElement} href="#">
              {navElement}
            </a>
          );
        })}
      </div>
    </header>
  );
};

// Header.defaultProps = {
//   title: "Title",
//   navElements: ["placeholder1", "placeholder2"]
// }

Header.propTypes = {
  title: propTypes.string.isRequired,
  navElements: propTypes.arrayOf(propTypes.string).isRequired
}

export default Header;
