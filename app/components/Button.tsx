export const Button = ({
  disabled,
  text,
}: {
  disabled: boolean;
  text: string;
}) => {
  return (
    <button
      disabled={disabled}
      className="bg-orange-500 hover:bg-orange-600 p-2 text-white rounded-lg transition-colors ease-in-out disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-orange-400"
      type="submit"
    >
      {text}
    </button>
  );
};
