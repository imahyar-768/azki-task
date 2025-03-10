import SelectInput from '@/components/selectInput';
import {useFetchInsuranceCompany} from './hook/useFetchInsuranceCompany';
import {TFormData} from '@/containers/selectCarInsurance';

type TProps = {
  handleChange: (field: keyof TFormData, value: string) => void;
  error?: string;
  value?: string;
};

const SelectInsuranceCompany = ({handleChange, error, value = ''}: TProps) => {
  const {optionsTypes, isPending} = useFetchInsuranceCompany();
  return (
    <>
      <span className="mb-4 text-2xl font-medium">بیمه شخص ثالث</span>
      <p className="my-4 mt-8 text-[#c5c5c5]">شرکت بیمه گر قبلی خود را در این مرحله انتخاب کنید.</p>
      <div>
        {isPending ? (
          <div className="mt-2 mb-6 h-12 w-full animate-pulse bg-[#f1f1f1]" />
        ) : (
          <>
            <SelectInput
              options={optionsTypes}
              onChange={e => handleChange('insuranceName', e.target.value)}
              placeholder="شرکت بیمه گر قبلی"
              error={error}
              value={value}
            />
            {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
          </>
        )}
      </div>
    </>
  );
};

export default SelectInsuranceCompany;
