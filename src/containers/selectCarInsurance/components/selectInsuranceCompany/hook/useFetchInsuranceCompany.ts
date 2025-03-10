import {useQuery} from '@tanstack/react-query';
import {TResponseData} from '@/containers/selectCarInsurance/services/type';
import {fetchInsuranceCompany} from '@/containers/selectCarInsurance/services';

export const useFetchInsuranceCompany = () => {
  const {data, isPending} = useQuery<TResponseData[], Error>({
    queryKey: ['insuranceCompany'],
    queryFn: fetchInsuranceCompany,
    staleTime: 15 * 10000,
  });

  const optionsTypes = data?.map(type => ({
    value: type.id,
    label: type.title,
  }));
  return {optionsTypes, isPending};
};
