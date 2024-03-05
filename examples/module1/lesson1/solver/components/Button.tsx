type Label = '+' | '-' | '*' | '/';

type ButtonProps = {
  label: Label;
  onClick: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
