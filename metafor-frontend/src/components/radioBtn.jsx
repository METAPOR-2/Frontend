export default function Select({
  text = "",
  isChecked,
  onChange = () => {},
  className,
}) {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="radio-group"
        checked={isChecked}
        onChange={onChange}
        className="form-radio text-purple-500 focus:ring-purple-500 checked:text-purple-500"
      />
      <span
        className={`${className} ${
          isChecked ? "font-semibold" : "text-gray-700"
        }`}
      >
        {text}
      </span>
    </label>
  );
}
