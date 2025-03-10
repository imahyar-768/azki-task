'use client';

import React, {useEffect, ReactNode} from 'react';
import {motion} from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children, title}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center rounded-xl shadow-lg">
      {/* Backdrop */}
      <div className="fixed inset-0 backdrop-blur-md" onClick={onClose} />
      <motion.div
        initial={{opacity: 0, scale: 0.9}}
        animate={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: 0.9}}
        transition={{duration: 0.3}}
        className="relative z-10 w-full max-w-md rounded-lg bg-white shadow-lg"
      >
        {/* Modal Content */}
        <div className="relative z-10 w-full max-w-md rounded-lg bg-white shadow-lg">
          {/* Header */}
          {title && (
            <div className="border-b p-4">
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            </div>
          )}

          {/* Body */}
          <div className="p-8">{children}</div>

          {/* Footer */}
          <div className="flex justify-end border-t p-4">
            <button
              onClick={onClose}
              className="m-auto w-1/2 cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              متوجه شدم
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
