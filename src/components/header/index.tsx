'use client';
import Image from 'next/image';

type TProps = {
  userName: string;
  onLogout?: () => void;
};

const Header = ({userName, onLogout}: TProps) => {
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
          {onLogout && (
            <button
              onClick={onLogout}
              className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-1.5 text-sm text-red-600 transition-colors hover:bg-red-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              خروج
            </button>
          )}
        </div>
      )}
    </div>
  );
};
export default Header;
