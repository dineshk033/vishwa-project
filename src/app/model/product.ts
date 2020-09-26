export interface Product {
  name: string;
  display_name: string;
  discription: string;
  purchasable: string;
  summary: string;
  brand: string;
  variantModel: string;
  color:string;
  os:string;
  price: Price;
  imageUrl: any[];
  displayImage: string;
  cashOnDelivery: boolean;
  pickUpFromStoreEnabled: boolean;
  payAtStoreEnabled: boolean;
  shipmentEnabled: boolean;
  stock: string;
  futureStocks: string;
  isPreOrderEnabled: boolean;
  averageRating: string;
  numberOfReviews: string;
}

interface Price {
  currencyIso: string;
  price: number;
  formattedValue?: string;
  minQuantity?: string;
  maxQuantity?: string;
  discount: string;
}

interface Specification {
    resolution:string;
    gpu:string;
    year?:number;
    height:string;
    width:string;
    manufactureWarranty:string;
    weight:string;
    screenSize:string;
    series:string;
    touch:boolean;
    processor:string;
    memory:string;
    hardDisk:string;
}
