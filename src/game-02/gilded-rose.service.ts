import { Injectable } from '@nestjs/common';
import { Item } from './item.entity';

@Injectable()
export class GildedRoseService {
  private readonly items: Item[] = [
    new Item('+5 Dexterity Vest', 10, 20),
    new Item('Aged Brie', 2, 0),
    new Item('Elixir of the Mongoose', 5, 7),
    new Item('Sulfuras, Hand of Ragnaros', 0, 80),
    new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
    new Item('Conjured Mana Cake', 3, 6),
  ];
  updateQuality(): void {
    this.items.forEach((item) => {
      if (item.name === 'Sulfuras, Hand of Ragnaros') {
        return;
      }
      
      item.sellIn--;
  
      switch (true) {
        case item.name === 'Aged Brie':
          this.updateAgedBrie(item);
          break;
  
        case item.name.includes('Backstage passes'):
          this.updateBackstagePass(item);
          break;
  
        case item.name.includes('Conjured'):
          this.updateConjuredItem(item);
          break;
  
        default:
          this.updateNormalItem(item);
          break;
      }

      item.quality = Math.max(0, Math.min(item.quality, 50));
    });
  }
  

  private updateAgedBrie(item: Item): void {
    item.quality++;
    if (item.sellIn < 0) {
      item.quality++; 
    }
  }

  private updateBackstagePass(item: Item): void {
    if (item.sellIn < 0) {
      item.quality = 0; 
    } else if (item.sellIn <= 5) {
      item.quality += 3;
    } else if (item.sellIn <= 10) {
      item.quality += 2;
    } else {
      item.quality++;
    }
  }

  private updateConjuredItem(item: Item): void {
    item.quality -= 2; 
    if (item.sellIn < 0) {
      item.quality -= 2;
    }
  }

  private updateNormalItem(item: Item): void {
    item.quality--;
    if (item.sellIn < 0) {
      item.quality--;
    }
  }

  // retorna los itemns
  getItems(): Item[] {
    return this.items;
  }
}
