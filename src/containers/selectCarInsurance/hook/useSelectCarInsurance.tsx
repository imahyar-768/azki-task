import {useState, useCallback} from 'react';
import SelectInsurance from '@/containers/selectCarInsurance/components/selectInsurance';
import SelectTypeCar from '@/containers/selectCarInsurance/components/selectTypeCar';
import SelectInsuranceCompany from '@/containers/selectCarInsurance/components/selectInsuranceCompany';
import SelectDiscount from '@/containers/selectCarInsurance/components/selectDiscount';
import {TFormData} from '@/containers/selectCarInsurance';

const TOTAL_STEPS = 4;

export const useSelectCarInsurance = () => {
  const [step, setStep] = useState<number>(1);
  const [openModal, setHasModal] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof TFormData, string>>>({});
  const [isValid, setIsValid] = useState(true);

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
    // Clear error when field is updated
    if (errors[field]) {
      setErrors(prev => ({...prev, [field]: ''}));
    }
  };

  // Validation logic for each step
  const validateStep = useCallback((): boolean => {
    let valid = true;
    const newErrors: Partial<Record<keyof TFormData, string>> = {};

    switch (step) {
      case 2:
        if (!formData.vehicleType) {
          newErrors.vehicleType = 'لطفا نوع خودرو را انتخاب کنید';
          valid = false;
        }
        if (!formData.vehicleModel) {
          newErrors.vehicleModel = 'لطفا مدل خودرو را انتخاب کنید';
          valid = false;
        }
        break;
      case 3:
        if (!formData.insuranceName) {
          newErrors.insuranceName = 'لطفا شرکت بیمه گر قبلی را انتخاب کنید';
          valid = false;
        }
        break;
      case 4:
        if (!formData.discount) {
          newErrors.discount = 'لطفا درصد تخفیف ثالث را انتخاب کنید';
          valid = false;
        }
        if (!formData.accidentDiscount) {
          newErrors.accidentDiscount = 'لطفا درصد تخفیف حوادث راننده را انتخاب کنید';
          valid = false;
        }
        break;
      default:
        valid = true;
    }

    setErrors(newErrors);
    setIsValid(valid);
    return valid;
  }, [step, formData]);

  // Go to next step
  const nextStep = () => {
    const valid = validateStep();
    if (valid) {
      if (step < TOTAL_STEPS) {
        setStep(step + 1);
        setErrors({});
      } else if (step === TOTAL_STEPS) {
        setHasModal(true);
      }
    }
  };

  // Go to previous step
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setErrors({});
      setIsValid(true);
    }
  };

  // Reset Step
  const resetStep = () => {
    setStep(1);
    setErrors({});
    setIsValid(true);
  };

  // Render Steps
  const renderSteps = () => {
    switch (step) {
      case 1:
        return <SelectInsurance handleSelect={nextStep} />;
      case 2:
        return (
          <SelectTypeCar
            formData={formData}
            handleChange={handleChange}
            errors={errors}
          />
        );
      case 3:
        return (
          <SelectInsuranceCompany
            handleChange={handleChange}
            error={errors.insuranceName}
            value={formData.insuranceName}
          />
        );
      case 4:
        return (
          <SelectDiscount
            handleChange={handleChange}
            errors={{
              discount: errors.discount,
              accidentDiscount: errors.accidentDiscount,
            }}
            values={{
              discount: formData.discount,
              accidentDiscount: formData.accidentDiscount,
            }}
          />
        );
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
    isStepValid: () => isValid,
    nextStep,
    prevStep,
    resetStep,
    stepVariants,
    openModal,
    setHasModal,
    formData,
    totalSteps: TOTAL_STEPS,
    errors,
  };
};
