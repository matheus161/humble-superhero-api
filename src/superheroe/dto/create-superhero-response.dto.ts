import { IsString, IsNumber } from 'class-validator';

export class CreateSuperheroResponseDto {
  @IsString()
  name: string;

  @IsString()
  superpower: string;

  @IsNumber()
  humilityScore: number;

  @IsString()
  id: number;

  @IsString()
  createdAt: string;

  @IsString()
  updatedAt: string;
}
