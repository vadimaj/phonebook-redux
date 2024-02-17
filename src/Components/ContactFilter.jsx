/* eslint-disable react/prop-types */

const ContactFilter = ({ value, onChange }) => {
  return (
    <section className="text-base  font-normal border-2 border-slate-500 rounded-md p-5 w-1/2 mx-auto mb-7">
      <div className="mb-4  text-left flex flex-col  gap-1">
        <label>Find contacts</label>
        <input
          className="w-48 rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3;"
          type="text"
          name="name"
          value={value}
          onChange={onChange}
          required
        />
      </div>
    </section>
  );
};

export default ContactFilter;
