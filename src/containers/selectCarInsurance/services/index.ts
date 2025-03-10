import {TResponseData, VehicleType} from './type';

export const fetchVehicleTypes = async (): Promise<VehicleType[]> => {
  const response = await fetch(
    'https://www.azki.com/api/product/vehicle/types',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch vehicle types');
  }
  return response.json();
};

export const fetchInsuranceCompany = async (): Promise<TResponseData[]> => {
  const response = await fetch(
    'https://www.azki.com/api/product/third/companies',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch vehicle types');
  }
  return response.json();
};

export const fetchDiscount = async (): Promise<TResponseData[]> => {
  const response = await fetch(
    'https://www.azki.com/api/product/third/third-discounts',
  );
  if (!response.ok) {
    throw new Error('Failed to fetch vehicle types');
  }
  return response.json();
};
