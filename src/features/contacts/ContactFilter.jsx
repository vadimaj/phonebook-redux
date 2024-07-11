/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { filterChange } from './ContactSlice';
import { useSelector } from 'react-redux';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const value = useSelector((store) => store.filter);
  const handleFilterChange = (e) => {
    dispatch(filterChange(e.target.value));
    console.log(value);
  };

  return (
    <section className="text-base  font-normal border-2 border-slate-500 rounded-md p-5 w-1/2 mx-auto mb-7">
      <div className="mb-4  text-left flex flex-col  gap-1">
        <label>Find contacts</label>
        <input
          className="w-48 rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3;"
          type="text"
          name="name"
          value={value}
          onChange={handleFilterChange}
          required
        />
      </div>
    </section>
  );
};

export default ContactFilter;
