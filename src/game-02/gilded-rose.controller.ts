import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GildedRoseService } from './gilded-rose.service';
import { Item } from './item.entity';

@ApiTags('gilded-rose')
@Controller('gilded-rose')
export class GildedRoseController {
  constructor(private readonly gildedRoseService: GildedRoseService) {}

  @ApiOperation({ summary: 'Update product quality' })
  @ApiResponse({
    status: 200,
    description: 'Updated product list',
    type: [Item],
  })
  @Get('update-products')
  updateQuality() {
    this.gildedRoseService.updateQuality();
    return this.gildedRoseService.getItems();
  }
}
