'use client';

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return <p className="text-center text-red-500">{error}</p>;
};

export default ErrorMessage;