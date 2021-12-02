import { Pipe, PipeTransform } from '@angular/core';
import { StockUrgency } from "../model/StockUrgency";

@Pipe({
  name: 'stockUrgencyLabel'
})
export class StockUrgencyLabelPipe implements PipeTransform {

  transform(stockUrgency: StockUrgency): string {
    return stockUrgency.toString()
      .toLowerCase()
      .replace('stock_', '');
  }

}
