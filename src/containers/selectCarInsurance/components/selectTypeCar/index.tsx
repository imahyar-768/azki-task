import SelectInput from '@/components/selectInput';
import {useFetchTypeCar} from './hook/useFetchTypeCar';
import {TFormData} from '@/containers/selectCarInsurance';

type TProps = {
  formData: TFormData;
  handleChange: (field: keyof TFormData, value: string) => void;
};

const SelectTypeCar = ({formData, handleChange}: TProps) => {
  const {isPending, optionsTypes, usageOptions} = useFetchTypeCar({formData});

  return (
    <div>
      <span className="mb-4 text-2xl font-medium">بیمه شخص ثالث</span>
      <p className="my-4 text-[#c5c5c5]">نوع و مدل خودروی خود را انتخاب کنید.</p>
      <div className="flex gap-2">
        {isPending ? (
          <div className="mt-2 mb-6 h-12 w-52 animate-pulse bg-[#f1f1f1]" />
        ) : (
          <SelectInput
            options={optionsTypes}
            onChange={e => handleChange('vehicleType', e.target.value)}
            value={formData.vehicleType}
            placeholder="نوع خودرو"
            loading={isPending}
          />
        )}

        {isPending ? (
          <div className="mt-2 mb-6 h-12 w-52 animate-pulse bg-[#f1f1f1]" />
        ) : (
          <SelectInput
            options={usageOptions}
            onChange={e => handleChange('vehicleModel', e.target.value)}
            value={formData.vehicleModel}
            placeholder="مدل خودرو"
            disabled={!formData.vehicleType}
          />
        )}
      </div>
    </div>
  );
};
export default SelectTypeCar;
