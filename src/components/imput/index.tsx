import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}

export function Input({
  name,
  placeholder,
  type,
  error,
  register,
  rules,
}: InputProps) {
  return (
    <div className="">
      <input
        className="w-full border-2 rounded-md h-11 px-2"
        placeholder={placeholder}
        type={type}
        id={name}
        {...register(name, rules)}
      />
      {error && <p className="my-3 text-red-500 text-sm">{error}</p>}
    </div>
  );
}
