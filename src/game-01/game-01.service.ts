import { Injectable, NotFoundException } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Injectable()
export class Game01Service {
    @ApiResponse({
        status: 200,
        description: 'Returns the pair of numbers that sum to the target',
        type: [Number],
      })
      @ApiResponse({
        status: 404,
        description: 'No subset found that sums to the target',
      })
    findSubsetWithSum(numbers: number[], targetSum: number): [number, number] {
      const seenNumbers = new Set<number>();
  
      for (const number of numbers) {
        const complement = targetSum - number;
        if (seenNumbers.has(complement)) return [complement, number];
        seenNumbers.add(number);
      }
  
      throw new NotFoundException(`No found ${targetSum}`);
    }
  }
