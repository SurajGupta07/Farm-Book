export const Button = ({ text, type, callback }) => {
  return (
    <button
      onClick={callback}
      type={type}
      className="rounded h-10 w-20 flex justify-center items-center bg-blue-500 font-bold text-white shadow-lg disabled:opacity-80"
    >
      {text}
    </button>
  );
};
