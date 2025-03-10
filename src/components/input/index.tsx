import React from 'react';
import Image from 'next/image';
import {ControllerRenderProps} from 'react-hook-form';

interface InputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputClear?: () => void;
  name?: string;
  field?: ControllerRenderProps<Record<string, string>>;
  id?: string;
  isClearable?: boolean;
  error?: boolean;
  errorText?: string;
  disabled?: boolean;
  className?: string;
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  name,
  field,
  id,
  onInputClear,
  isClearable,
  error,
  errorText,
  maxLength,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseStyles = `
    w-full px-4 py-3 border rounded-sm
    focus:outline-none 
    bg-white text-gray-900 text-xs w-full
    ${error ? 'border-red-500' : 'border-gray-300'}
    ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-75' : ''}
  `;

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        maxLength={maxLength}
        disabled={disabled}
        className={`${baseStyles} ${className}`}
        {...props}
      />
      <div className="absolute top-0 left-0 flex h-14 items-center gap-3 py-3 pl-3">
        {isClearable && (field?.value || props.value?.toString()) && (
          <span
            className="flex"
            onClick={e => {
              e.stopPropagation();
              onInputClear?.();
            }}
          >
            <Image
          
              src="/icons/close.svg"
              width={16}
              height={16}
              alt="clear input"
              className="cursor-pointer hover:opacity-80"
            />
          </span>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{errorText}</p>}
    </div>
  );
};

export default Input;
