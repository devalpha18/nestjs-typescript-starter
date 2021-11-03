import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) { }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() newCat: Cat): Promise<Cat> {
    return this.catsService.create(newCat);
  }
}