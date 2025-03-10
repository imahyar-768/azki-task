import {MOBILE_REGEX, NUMBER_REGEX} from '@/lib/regex';

export const validateFarsi = (value: string) => {
  const persianRegex = /^[\u0600-\u06FF\s]+$/;
  return !(persianRegex.test(value) || value === '')
    ? 'لطفا فارسی تایپ کنید'
    : true;
};

export const mobileValidation = (val: string) => {
  const value = val?.replace(/\D/g, '');
  if (!value?.match(NUMBER_REGEX)) {
    return 'شماره موبایل صحیح نیست';
  }

  if (value.length >= 2 && !value.startsWith('09')) {
    return 'شماره موبایل با 09 شروع میشود.';
  }

  if (value.length === 11) {
    return !!value.match(MOBILE_REGEX);
  }
  return false;
};

export const validatePassword = (value: string): string | true => {
  if (!value) {
    return 'رمز عبور ضروری است';
  }

  // Check minimum length (4 characters)
  if (value.length < 4) {
    return 'رمز عبور باید حداقل ۴ کاراکتر باشد';
  }

  // Check maximum length (10 characters)
  if (value.length > 10) {
    return 'رمز عبور باید حداکثر ۱۰ کاراکتر باشد';
  }

  // Check for at least one uppercase letter
  if (!/[A-Z]/.test(value)) {
    return 'رمز عبور باید شامل حداقل یک حرف بزرگ باشد';
  }

  // Check for at least one special character (symbols: !@#$%^&*)
  if (!/[!@#$%^&*]/.test(value)) {
    return 'رمز عبور باید شامل حداقل یک نماد باشد (مانند !@#$%^&*)';
  }

  return true;
};
