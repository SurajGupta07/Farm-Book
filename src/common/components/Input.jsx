export const Input = ({
  id,
  type,
  placeholder,
  onChange,
  autocomplete,
  value,
  name
}) => {
  return (
    <input
      className="flex-1 bg-gray-100 w-full py-3 px-4 text-gray-700 placeholder-gray-400 shadow-lg rounded text-base focus:outline-none focus:ring-opacity:50 focus:ring-2 focus:ring-gray-400"
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete={autocomplete}
      value={value}
    />
  );
};
