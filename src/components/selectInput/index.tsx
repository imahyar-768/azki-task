import React from 'react';

interface Option {
  value: string | number;
  label: string;
}

interface SelectInputProps {
  label?: string;
  options: (string | Option)[] | undefined;
  id?: string;
  value?: string;
  placeholder?: string;
  loading?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  disabled?: boolean;
  error?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  id,
  value,
  onChange,
  placeholder,
  className,
  loading,
  disabled,
  error,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          className="mb-2 block text-xs font-bold tracking-wide text-gray-500 uppercase"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={`block w-full cursor-pointer appearance-none rounded border px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none ${
            error ? 'border-red-500' : 'border-gray-200'
          }`}
          id={id}
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          {loading ? (
            <>...loading</>
          ) : (
            <>
              <option value="" disabled>
                {placeholder}
              </option>
              {options &&
                options?.map((option, index) => {
                  const optionValue =
                    typeof option === 'string' ? option : option.value;
                  const optionLabel =
                    typeof option === 'string' ? option : option.label;
                  return (
                    <option key={index} value={optionValue}>
                      {optionLabel}
                    </option>
                  );
                })}
            </>
          )}
        </select>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
