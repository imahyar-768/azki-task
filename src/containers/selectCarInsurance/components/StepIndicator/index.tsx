import React from 'react';

type Props = {
  currentStep: number;
  totalSteps: number;
};

const StepIndicator: React.FC<Props> = ({currentStep, totalSteps}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center">
        {Array.from({length: totalSteps}, (_, index) => (
          <div
            key={index}
            className="flex items-center"
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                index + 1 <= currentStep
                  ? 'bg-[#26B69B] text-white'
                  : 'border border-gray-300 bg-white text-gray-500'
              }`}
            >
              {index + 1}
            </div>
            {index < totalSteps - 1 && (
              <div
                className={`h-[2px] w-20 ${
                  index + 1 < currentStep ? 'bg-[#26B69B]' : 'bg-gray-300'
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-12 px-1 text-sm text-gray-600">
        <span>انتخاب بیمه</span>
        <span>نوع خودرو</span>
        <span>بیمه گر قبلی</span>
        <span>تخفیف‌ها</span>
      </div>
    </div>
  );
};

export default StepIndicator; 