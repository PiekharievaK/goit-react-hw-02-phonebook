import PropTypes from 'prop-types';
import s from './ContactsFilter.module.css';
function Filter({ value, changeFilter }) {
  return (
    <input
      type="text"
      name="findField"
      className={s.input}
      value={value}
      onChange={changeFilter}
    />
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
export default Filter;
