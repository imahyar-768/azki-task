import {FC} from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import Modal from '@/components/modal';
import {useSelectCarInsurance} from './hook/useSelectCarInsurance';
import StepIndicator from './components/StepIndicator';

export type TFormData = {
  vehicleType: string;
  vehicleModel: string;
  insuranceName: string;
  discount: string;
  accidentDiscount: string;
};

const SelectCarInsurance: FC = () => {
  const {
    step,
    nextStep,
    prevStep,
    isStepValid,
    renderSteps,
    resetStep,
    stepVariants,
    openModal,
    setHasModal,
    formData,
    totalSteps,
  } = useSelectCarInsurance();

  return (
    <div className="flex flex-col gap-5">
      <StepIndicator currentStep={step} totalSteps={totalSteps} />

      <motion.div
        key={step}
        variants={stepVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{duration: 0.3}}
        className="min-h-[200px]"
      >
        {renderSteps()}
      </motion.div>

      {step > 1 && step < totalSteps && (
        <div className="item-center mt-8 flex justify-between">
          <button
            className="flex h-10 w-28 cursor-pointer items-center justify-center gap-4 rounded-full border border-[#26B69B] p-2 text-sm text-[#26B69B] transition-opacity hover:opacity-80"
            onClick={prevStep}
            disabled={step === 1}
          >
            <Image
              src="/icons/arrow.svg"
              width={10}
              height={10}
              alt="arrow"
              className="rotate-180"
            />
            بازگشت
          </button>
          <button
            className={`flex h-10 w-28 cursor-pointer items-center justify-center gap-4 rounded-full border border-[#26B69B] p-2 text-sm text-[#26B69B] transition-all ${
              !isStepValid() ? 'cursor-not-allowed opacity-50' : 'hover:opacity-80'
            }`}
            onClick={nextStep}
            disabled={!isStepValid()}
          >
            مرحله بعدی
            <Image src="/icons/arrow.svg" width={10} height={10} alt="arrow" />
          </button>
        </div>
      )}

      {step === totalSteps && (
        <div className="mt-8 flex justify-end">
          <button
            className={`flex h-10 w-28 cursor-pointer items-center justify-center gap-4 rounded-full bg-[#26B69B] p-2 text-sm text-white transition-all ${
              !isStepValid() ? 'cursor-not-allowed opacity-50' : 'hover:opacity-90'
            }`}
            onClick={() => setHasModal(true)}
            disabled={!isStepValid()}
          >
            استعلام قیمت
          </button>
        </div>
      )}

      <Modal
        isOpen={openModal}
        onClose={() => {
          setHasModal(false);
          resetStep();
        }}
        title="خلاصه اطلاعات"
      >
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <b>نوع خودرو:</b> {formData.vehicleType || 'انتخاب نشده'}
          </li>
          <li>
            <b>مدل خودرو:</b> {formData.vehicleModel || 'انتخاب نشده'}
          </li>
          <li>
            <b>بیمه گر قبلی:</b> {formData.insuranceName || 'انتخاب نشده'}
          </li>
          <li>
            <b>تخفیف شخص ثالث:</b> {formData.discount || 'انتخاب نشده'}
          </li>
          <li>
            <b>تخفیف حوادث رانندگی:</b> {formData.accidentDiscount || 'انتخاب نشده'}
          </li>
        </ul>
      </Modal>
    </div>
  );
};

export default SelectCarInsurance;
