
import { ApiProperty } from '@nestjs/swagger';

export class Item {
  @ApiProperty({ example: 'Aged Brie', description: 'Nombre del producto' })
  name: string;

  @ApiProperty({ example: 10, description: 'Días restantes para la venta' })
  sellIn: number;

  @ApiProperty({ example: 20, description: 'Calidad del producto' })
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}