import {useState} from 'react';
import SelectInsurance from '@/containers/selectCarInsurance/components/selectInsurance';
import SelectTypeCar from '@/containers/selectCarInsurance/components/selectTypeCar';
import SelectInsuranceCompany from '@/containers/selectCarInsurance/components/selectInsuranceCompany';
import SelectDiscount from '@/containers/selectCarInsurance/components/selectDiscount';
import {TFormData} from '@/containers/selectCarInsurance';

export const useSelectCarInsurance = () => {
  const [step, setStep] = useState<number>(1);
  const [openModal, setHasModal] = useState(false);

  const [formData, setFormData] = useState<TFormData>({
    vehicleType: '',
    vehicleModel: '',
    insuranceName: '',
    discount: '',
    accidentDiscount: '',
  });

  // Update state on input change
  const handleChange = (field: keyof TFormData, value: string) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  // Validation logic for each step
  const isStepValid = (): boolean => {
    switch (step) {
      case 2:
        return !!formData.vehicleType && !!formData.vehicleModel;
      case 3:
        return !!formData.insuranceName;
      case 4:
        return !!formData.discount && !!formData.accidentDiscount;
      default:
        return true;
    }
  };

  // Go to next step
  const nextStep = () => {
    if (isStepValid() && step < 4) {
      setStep(step + 1);
    } else if (step === 4 && isStepValid()) {
      setHasModal(true);
    }
  };

  // Go to previous step
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Render Steps
  const renderSteps = () => {
    switch (step) {
      case 1:
        return <SelectInsurance handleSelect={nextStep} />;
      case 2:
        return <SelectTypeCar formData={formData} handleChange={handleChange} />;
      case 3:
        return <SelectInsuranceCompany handleChange={handleChange} />;
      case 4:
        return <SelectDiscount handleChange={handleChange} />;
      default:
        return null;
    }
  };

  // Animation variants for sliding and fading
  const stepVariants = {
    initial: {opacity: 0, x: 50},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -50},
  };
  return {
    step,
    renderSteps,
    isStepValid,
    nextStep,
    prevStep,
    stepVariants,
    openModal,
    setHasModal,
    formData,
  };
};
