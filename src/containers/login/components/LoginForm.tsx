import { FC } from 'react';
import { LoginField } from './LoginField';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { UseFormSetValue } from 'react-hook-form';
import { TLoginForm } from '../types';

interface LoginFormProps {
  onSubmit: () => void;
  isLoading: boolean;
  formFields: {
    firstName: any;
    lastName: any;
    phoneNumber: any;
  };
  setValue: UseFormSetValue<TLoginForm>;
}

export const LoginForm: FC<LoginFormProps> = ({
  onSubmit,
  isLoading,
  formFields,
  setValue,
}) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <LoginField
      label="نام"
      placeholder="نام خود را وارد کنید"
      register={formFields.firstName}
      error={formFields.firstName.error}
      name="firstName"
      setValue={setValue}
    />
    
    <LoginField
      label="نام خانوادگی"
      placeholder="نام خانوادگی خود را وارد کنید"
      register={formFields.lastName}
      error={formFields.lastName.error}
      name="lastName"
      setValue={setValue}
    />
    
    <LoginField
      label="شماره موبایل"
      placeholder="09xxxxxxxxx"
      type="tel"
      maxLength={11}
      register={formFields.phoneNumber}
      error={formFields.phoneNumber.error}
      name="phoneNumber"
      setValue={setValue}
    />

    <button
      type="submit"
      disabled={isLoading}
      className={`mt-6 w-full rounded-full bg-[#26B69B] py-3 text-white transition-all
        ${isLoading ? 'cursor-not-allowed opacity-70' : 'hover:bg-[#229883]'}
      `}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <LoadingSpinner />
          در حال پردازش...
        </span>
      ) : (
        'ورود به حساب کاربری'
      )}
    </button>
  </form>
); 