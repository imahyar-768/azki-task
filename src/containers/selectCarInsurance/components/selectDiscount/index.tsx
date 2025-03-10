import SelectInput from '@/components/selectInput';
import {useFetchDiscount} from '@/containers/selectCarInsurance/components/selectDiscount/hook/useFetchDiscount';
import {TFormData} from '@/containers/selectCarInsurance';

type TProps = {
  handleChange: (field: keyof TFormData, value: string) => void;
  errors?: {
    discount?: string;
    accidentDiscount?: string;
  };
  values?: {
    discount: string;
    accidentDiscount: string;
  };
};

const SelectDiscount = ({handleChange, errors, values = { discount: '', accidentDiscount: '' }}: TProps) => {
  const {optionsTypes, isPending} = useFetchDiscount();
  return (
    <>
      <span className="mb-4 text-2xl font-medium">بیمه شخص ثالث</span>
      <p className="mt-8 text-[#c5c5c5]">
        درصد تخفیف بیمه شخص ثالث و حوادث رانندگی خود را انتخاب کنید.
      </p>
      <div className="flex flex-col gap-4">
        <div>
          {isPending ? (
            <div className="my-2 mb-6 h-12 w-full animate-pulse bg-[#f1f1f1]" />
          ) : (
            <>
              <SelectInput
                options={optionsTypes}
                onChange={e => handleChange('discount', e.target.value)}
                placeholder="درصد تخفیف ثالث"
                error={errors?.discount}
                value={values.discount}
              />
              {errors?.discount && (
                <span className="mt-1 text-sm text-red-500">{errors.discount}</span>
              )}
            </>
          )}
        </div>

        <div>
          {isPending ? (
            <div className="my-2 h-12 w-full animate-pulse bg-[#f1f1f1]" />
          ) : (
            <>
              <SelectInput
                options={optionsTypes}
                onChange={e => handleChange('accidentDiscount', e.target.value)}
                placeholder="درصد تخفیف حوادث راننده"
                error={errors?.accidentDiscount}
                value={values.accidentDiscount}
              />
              {errors?.accidentDiscount && (
                <span className="mt-1 text-sm text-red-500">{errors.accidentDiscount}</span>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SelectDiscount;
