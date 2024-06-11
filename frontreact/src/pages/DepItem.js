import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const DepItem = ({ details }) => {
  const { depName } = details;

  return (
    
    <div className="text-primary w-25 text-center border-2 shadow bg-success p-3 m-3 mr-2 ">
    <h3>{depName}</h3>
    <Link to={`/viewstudents`} className="btn btn-danger mx-2 mt-4">viewstudents</Link>
    </div>
  );
};

DepItem.propTypes = {
  details: PropTypes.shape({
    depName: PropTypes.string.isRequired,
    
  }).isRequired,
};

export default DepItem;
