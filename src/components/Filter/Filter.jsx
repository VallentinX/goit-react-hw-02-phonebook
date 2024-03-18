import PropTypes from "prop-types";
import "./Filter.module.css";

const Filter = ({ filter, changeFilterInput }) => (
  <form>
    {" "}
    <label>
      <input
        type="text"
        name={filter}
        onChange={changeFilterInput}
        placeholder="Find a contact"
      />
    </label>
  </form>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};

export default Filter;
