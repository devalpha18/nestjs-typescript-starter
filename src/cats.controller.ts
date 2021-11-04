import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './create-cat.dto';
import { AuthGuard } from './auth.guard';

@Controller('cats')
@UseGuards(AuthGuard)
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