import { Pipe, PipeTransform } from '@angular/core';
import { StockUrgency } from "../model/StockUrgency";

@Pipe({
  name: 'stockUrgency'
})
export class StockUrgencyPipe implements PipeTransform {

  transform(stockUrgency: StockUrgency): string {
    return stockUrgency.toString().replace("STOCK_", "warning-").toLowerCase() + ".png";
  }

}
