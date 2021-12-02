import { StockUrgency } from "./StockUrgency";

export interface Item {
  id: string;
  name: string;
  price: number;
  amountOfStock: number;
  stockUrgency: StockUrgency;
}
