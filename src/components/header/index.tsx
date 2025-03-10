'use client';
import Image from 'next/image';

type TProps = {
  userName: string;
};

const Header = ({userName}: TProps) => {
  return (
    <div className="relative flex items-center justify-between">
      <Image src="/icons/logo.svg" width={20} height={20} alt="logo" />
      <span className="hidden text-xl font-semibold sm:block">
        سامانه مقایسه و خرید آنلاین بیمه
      </span>
      {userName === '' ? (
        <span className="text-sm">ثبت نام</span>
      ) : (
        <div className="flex items-center gap-3">
          <Image src="/icons/user.svg" width={20} height={20} alt="user" />
          <span className="text-sm">{userName}</span>
        </div>
      )}
    </div>
  );
};
export default Header;
