type TUsage = {
  id: number;
  title: string;
};

export interface VehicleType {
  id: number;
  title: string;
  usages?: TUsage[];
}

export interface TResponseData {
  id: number;
  title: string;
}
