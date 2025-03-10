import {FC} from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';
import Modal from '@/components/modal';
import {useSelectCarInsurance} from './hook/useSelectCarInsurance';

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
    stepVariants,
    openModal,
    setHasModal,
    formData,
  } = useSelectCarInsurance();

  return (
    <div className="flex flex-col gap-5">
      <motion.div
        key={step}
        variants={stepVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{duration: 0.3}}
      >
        {renderSteps()}
      </motion.div>
      {step > 1 && step < 4 && (
        <div className="item-center mt-8 flex justify-between">
          <button
            className="flex h-10 w-28 cursor-pointer items-center justify-center gap-4 rounded-full border border-[#26B69B] p-2 text-sm text-[#26B69B]"
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
            className={`flex h-10 w-28 cursor-pointer items-center justify-center gap-4 rounded-full border border-[#26B69B] p-2 text-sm text-[#26B69B] ${!isStepValid() && 'opacity-50'}`}
            onClick={nextStep}
            disabled={step === 5 || !isStepValid()}
          >
            مرحله بعدی
            <Image src="/icons/arrow.svg" width={10} height={10} alt="arrow" />
          </button>
        </div>
      )}
      {step === 4 && (
        <div className="mt-8 flex justify-end">
          <button
            className='className="flex h-10 w-28 cursor-pointer items-center justify-center gap-4 rounded-full bg-[#26B69B] p-2 text-sm text-white'
            onClick={() => setHasModal(true)}
            disabled={!isStepValid()}
          >
            استعلام قیمت
          </button>
        </div>
      )}
      <Modal isOpen={openModal} onClose={() => setHasModal(false)} title="خلاصه اطلاعات">
        <ul className="list-disc pl-5">
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
