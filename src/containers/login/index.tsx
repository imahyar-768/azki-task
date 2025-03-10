'use client';

import Input from '@/components/input';
import {Controller, useForm} from 'react-hook-form';
import {mobileValidation, validateFarsi, validatePassword} from '@/utils/validates';
import {motion} from 'framer-motion';

type TProps = {
  handleLoginSubmit: (data: TLoginForm) => void;
};

export type TLoginForm = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
};

const LoginContainer = ({handleLoginSubmit}: TProps) => {
  const {
    handleSubmit,
    control,
    resetField,
    formState: {errors},
  } = useForm<TLoginForm>();

  const fieldVariants = {
    hidden: {opacity: 0, y: 20},
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.4,
      },
    }),
  };

  const buttonVariants = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {duration: 0.4, delay: 0.8},
    },
  };

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
      <span className="text-3xl font-medium">ثبت نام</span>
      <form className="py-8" onSubmit={handleSubmit(handleLoginSubmit)}>
        <div className="flex gap-3">
          <Controller
            name="firstName"
            control={control}
            rules={{
              validate: value => validateFarsi(value),
            }}
            render={({field}) => (
              <motion.div
                className="mb-2 h-18 w-full"
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                <Input
                  dir="rtl"
                  placeholder="نام"
                  {...field}
                  isClearable
                  maxLength={20}
                  error={!!errors?.firstName}
                  errorText={errors.firstName?.message}
                  onInputClear={() => {
                    resetField('firstName');
                  }}
                />
              </motion.div>
            )}
          />
          <Controller
            name="lastName"
            control={control}
            rules={{
              validate: value => validateFarsi(value),
            }}
            render={({field}) => (
              <motion.div
                className="mb-2 h-18 w-full"
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                <Input
                  dir="rtl"
                  placeholder="نام خانوادگی"
                  {...field}
                  isClearable
                  maxLength={20}
                  error={!!errors?.lastName}
                  errorText={errors.lastName?.message}
                  onInputClear={() => {
                    resetField('lastName');
                  }}
                />
              </motion.div>
            )}
          />
        </div>

        <Controller
          name="phoneNumber"
          control={control}
          rules={{
            validate: value => mobileValidation(value),
          }}
          render={({field}) => (
            <motion.div
              className="mb-2 h-18 w-full"
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              <Input
                dir="rtl"
                placeholder="شماره موبایل"
                {...field}
                isClearable
                maxLength={13}
                inputMode="numeric"
                error={!!errors?.phoneNumber}
                errorText={errors.phoneNumber?.message}
                onInputClear={() => {
                  resetField('phoneNumber');
                }}
              />
            </motion.div>
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            validate: value => validatePassword(value),
          }}
          render={({field}) => (
            <motion.div
              className="mb-2 h-18 w-full"
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <Input
                dir="rtl"
                placeholder="رمز عبور"
                {...field}
                type="password"
                isClearable
                maxLength={11}
                error={!!errors?.password}
                errorText={errors.password?.message}
                onInputClear={() => {
                  resetField('password');
                }}
              />
            </motion.div>
          )}
        />
        <div className="flex w-full justify-end">
          <motion.button
            type="submit"
            className="mt-4 cursor-pointer rounded-full bg-emerald-400 px-6 py-2 text-white transition-colors hover:bg-emerald-500"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            ثبت نام
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default LoginContainer;
