import propTypes, { string } from "prop-types";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <span>Student Manager</span>
      </div>
      <div className="header-right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
        <li>
          <Link to="/students/new">New Students</Link>
        </li>
      </div>
    </header>
  );
};

// Header.defaultProps = {
//   title: "Title",
//   navElements: ["placeholder1", "placeholder2"]
// }

// Header.propTypes = {
//   title: propTypes.string.isRequired,
//   navElements: propTypes.arrayOf(propTypes.string).isRequired,
// };

export default Header;
