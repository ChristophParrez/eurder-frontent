import { Pipe, PipeTransform } from '@angular/core';
import { StockUrgency } from "../model/StockUrgency";

@Pipe({
  name: 'stockUrgencyImage'
})
export class StockUrgencyImagePipe implements PipeTransform {

  transform(stockUrgency: StockUrgency): string {
    return stockUrgency.toString().replace("STOCK_", "warning-").toLowerCase() + ".png";
  }

}
