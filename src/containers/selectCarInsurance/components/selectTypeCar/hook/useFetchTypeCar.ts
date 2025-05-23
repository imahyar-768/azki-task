import {useQuery} from '@tanstack/react-query';
import {fetchVehicleTypes} from '@/containers/selectCarInsurance/services';
import {VehicleType} from '@/containers/selectCarInsurance/services/type';
import {TFormData} from '../../.';

export const useFetchTypeCar = ({formData}: {formData: TFormData}) => {
  const {data, isPending} = useQuery<VehicleType[], Error>({
    queryKey: ['vehicleTypes'],
    queryFn: fetchVehicleTypes,
  });

  const optionsTypes = data?.map(type => ({
    value: type.id,
    label: type.title,
  }));

  const selectedTypeData = data?.find(item => item.title === formData.vehicleType)?.usages;

  const usageOptions = selectedTypeData?.map(type => ({
    value: type.id,
    label: type.title,
  }));

  return {
    isPending,
    optionsTypes,
    usageOptions,
  };
};
