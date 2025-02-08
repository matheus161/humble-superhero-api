import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { CreateSuperheroResponseDto } from './dto/create-superhero-response.dto';

@Controller('superheroes')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Post()
  create(
    @Body() createSuperheroDto: CreateSuperheroDto,
  ): CreateSuperheroResponseDto {
    return this.superheroService.create(createSuperheroDto);
  }

  @Get()
  findAll() {
    return this.superheroService.findAll();
  }
}
