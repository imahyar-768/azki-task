import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { TLoginForm } from '../types';

export const useLogin = (onLoginSuccess: (data: TLoginForm) => void) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<TLoginForm>();

  const onSubmit = useCallback(async (data: TLoginForm) => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      onLoginSuccess(data);
      reset();
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [onLoginSuccess, reset]);

  const formFields = {
    firstName: {
      ...register('firstName', {
        required: 'نام خود را وارد کنید',
        minLength: {
          value: 2,
          message: 'نام باید حداقل 2 حرف باشد'
        }
      }),
      error: errors.firstName?.message,
    },
    lastName: {
      ...register('lastName', {
        required: 'نام خانوادگی خود را وارد کنید',
        minLength: {
          value: 2,
          message: 'نام خانوادگی باید حداقل 2 حرف باشد'
        }
      }),
      error: errors.lastName?.message,
    },
    phoneNumber: {
      ...register('phoneNumber', {
        required: 'شماره موبایل خود را وارد کنید',
        pattern: {
          value: /^09\d{9}$/,
          message: 'شماره موبایل نامعتبر است'
        }
      }),
      error: errors.phoneNumber?.message,
    },
  };

  return {
    isLoading,
    handleSubmit: handleSubmit(onSubmit),
    formFields,
    setValue,
  };
}; 