type ResultProps = {
  result: number | string;
};

export const Result = ({ result }: ResultProps) => {
  return <div>Result: {result}</div>;
};
