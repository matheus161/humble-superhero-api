import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { SuperheroResponseDto } from './dto/superheroes-response.dto';

@Controller('superheroes')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto): SuperheroResponseDto {
    return this.superheroService.create(createSuperheroDto);
  }

  @Get()
  findAll(): SuperheroResponseDto[] {
    return this.superheroService.findAll();
  }
}
