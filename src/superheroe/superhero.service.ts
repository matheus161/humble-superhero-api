import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { SuperheroResponseDto } from './dto/superheroes-response.dto';
import { Superhero } from './entities/superhero.entity';
import { SUPERHERO_ALREADY_EXISTS_RESPONSE } from './superhero.constant';
import { DEFAULT_SUPERHERO_CREATE_ERROR } from 'src/app/app.constants';

@Injectable()
export class SuperheroService {
  private readonly superheroes: Superhero[] = [];

  findOneSuperhero(name: string): Superhero | null {
    return this.superheroes.find((item) => item.name === name) || null;
  }

  insertSuperhero(createSuperheroDto: CreateSuperheroDto) {
    const superheroData: Superhero = {
      name: createSuperheroDto.name,
      superpower: createSuperheroDto.superpower,
      humilityScore: createSuperheroDto.humilityScore,
      id: this.superheroes.length + 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.superheroes.push(superheroData);
    return superheroData;
  }

  create(createSuperheroDto: CreateSuperheroDto): SuperheroResponseDto {
    try {
      const existingSuperhero = this.findOneSuperhero(createSuperheroDto.name);

      if (existingSuperhero) {
        throw new ConflictException(
          SUPERHERO_ALREADY_EXISTS_RESPONSE(createSuperheroDto.name),
        );
      }

      const newSuperhero: Superhero = this.insertSuperhero(createSuperheroDto);

      return newSuperhero;
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }

      throw new InternalServerErrorException(DEFAULT_SUPERHERO_CREATE_ERROR);
    }
  }

  findAll(): SuperheroResponseDto[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
