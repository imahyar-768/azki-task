import SelectInput from '@/components/selectInput';
import {useFetchDiscount} from '@/containers/selectCarInsurance/components/selectDiscount/hook/useFetchDiscount';
import {TFormData} from '@/containers/selectCarInsurance';

type TProps = {
  handleChange: (field: keyof TFormData, value: string) => void;
};

const SelectDiscount = ({handleChange}: TProps) => {
  const {optionsTypes, isPending} = useFetchDiscount();
  return (
    <>
      <span className="mb-4 text-2xl font-medium">بیمه شخص ثالث</span>
      <p className="mt-8 text-[#c5c5c5]">
        درصد تخفیف بیمه شخص ثالث و حوادث رانندگی خود را انتخاب کنید.
      </p>
      {isPending ? (
        <div className="my-2 mb-6 h-12 w-full animate-pulse bg-[#f1f1f1]" />
      ) : (
        <SelectInput
          options={optionsTypes}
          onChange={e => handleChange('discount', e.target.value)}
          placeholder="درصد تخفیف ثالث"
        />
      )}
      {isPending ? (
        <div className="my-2 h-12 w-full animate-pulse bg-[#f1f1f1]" />
      ) : (
        <SelectInput
          options={optionsTypes}
          onChange={e => handleChange('accidentDiscount', e.target.value)}
          placeholder="درصد تخفیف حوادث راننده"
        />
      )}
    </>
  );
};
export default SelectDiscount;
