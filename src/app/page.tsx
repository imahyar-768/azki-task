'use client';

import Image from 'next/image';
import Header from '@/components/header';
import LoginContainer, {TLoginForm} from '@/containers/login';
import {useState} from 'react';
import SelectCarInsurance from '../containers/selectCarInsurance';

type TState = 'LOGIN' | 'SELECT_TYPE_INSURANCE';

export default function Home() {
  const [login, setHasLogin] = useState<TState>(() => {
    if (typeof window !== 'undefined') {
      const storedData = window.sessionStorage.getItem('ACT');
      return storedData ? 'SELECT_TYPE_INSURANCE' : 'LOGIN';
    }
    return 'LOGIN';
  });

  const [userName, setUserName] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const storedData = window.sessionStorage.getItem('ACT');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        return `${parsedData.firstName} ${parsedData.lastName}`;
      }
    }
    return '';
  });

  const handleLoginSubmit = (data: TLoginForm) => {
    window.sessionStorage.setItem('ACT', JSON.stringify(data));
    setUserName(`${data.firstName} ${data.lastName}`);
    setHasLogin('SELECT_TYPE_INSURANCE');
  };

  return (
    <div
      dir="rtl"
      className="relative mx-2 h-full min-h-screen rounded-3xl bg-white px-4 py-3 shadow-md sm:mx-4 sm:px-6 sm:py-4 md:mx-6 md:px-8 md:py-5 lg:mx-8 lg:px-12"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 hidden h-full rounded-l-3xl bg-[#fef8e1] sm:block md:w-1/3 lg:w-2/7" />

      {/* Header */}
      <Header userName={userName} />

      {/* Car Image */}
      <Image
        className="absolute bottom-4 left-4"
        src="/icons/car-green.svg"
        width={600}
        height={400}
        alt="logo"
      />

      {/* Content */}
      <div className="relative mt-8 w-full sm:m-8 sm:w-3/4 md:m-12 md:w-2/3 lg:m-16 lg:w-1/2">
        {login === 'LOGIN' ? (
          <LoginContainer handleLoginSubmit={handleLoginSubmit} />
        ) : (
          <SelectCarInsurance />
        )}
      </div>
    </div>
  );
}
