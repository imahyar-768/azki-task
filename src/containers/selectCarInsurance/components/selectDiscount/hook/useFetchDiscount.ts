import {useQuery} from '@tanstack/react-query';
import {TResponseData} from '@/containers/selectCarInsurance/services/type';
import {fetchDiscount} from '@/containers/selectCarInsurance/services';

export const useFetchDiscount = () => {
  const {data, isPending} = useQuery<TResponseData[], Error>({
    queryKey: ['discount'],
    queryFn: fetchDiscount,
    staleTime: 15 * 10000,
  });

  const optionsTypes = data?.map(type => ({
    value: type.id,
    label: type.title,
  }));

  return {optionsTypes, isPending};
};
