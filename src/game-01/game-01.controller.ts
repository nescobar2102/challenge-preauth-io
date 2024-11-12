import {
  Controller,
  Get,
  Query,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Game01Service } from './game-01.service';
import { ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';

@Controller('game-01')
export class Game01Controller {
  constructor(private readonly game01: Game01Service) {}

  @Get('find')
  @ApiOperation({ summary: 'Find a subset that sums to the target' }) // Descripción de la operación
  @ApiQuery({
    name: 'M',
    description: 'List of numbers separated by commas',
    required: true,
    type: String,
  })
  @ApiQuery({
    name: 'N',
    description: 'Target sum',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'Subset found',
    type: [Number],
  })
  @ApiResponse({
    status: 404,
    description: 'No subset found that sums to the target',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request: missing or invalid parameters',
  })
  findSubset(@Query('M') numbersString: string, @Query('N') targetSum: string) {
    if (!numbersString || !targetSum) {
      throw new BadRequestException('Both parameters M and N are required');
    }
    const numbers = numbersString.split(',').map((num) => parseInt(num, 10));
    if (numbers.some(isNaN)) {
      throw new BadRequestException('Invalid format in parameter M');
    }
    const target = parseInt(targetSum, 10);
    if (isNaN(target)) {
      throw new BadRequestException('Invalid format in parameter N');
    }

    try {
      return this.game01.findSubsetWithSum(numbers, target);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
