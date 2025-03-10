import { FC } from 'react';
import Input from '@/components/input';
import { UseFormSetValue } from 'react-hook-form';
import { TLoginForm } from '../types';

interface LoginFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  maxLength?: number;
  register: any;
  error?: string;
  name: keyof TLoginForm;
  setValue: UseFormSetValue<TLoginForm>;
}

export const LoginField: FC<LoginFieldProps> = ({
  label,
  placeholder,
  type = 'text',
  maxLength,
  register,
  error,
  name,
  setValue,
}) => (
  <div>
    <Input
      {...register}
      type={type}
      label={label}
      placeholder={placeholder}
      maxLength={maxLength}
      error={!!error}
      errorText={error}
      className="transition-all focus:border-[#26B69B]"
      isClearable={true}
      onInputClear={() => setValue(name, '')}
    />
  </div>
); 