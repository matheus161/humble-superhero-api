import { IsNotEmpty, IsPositive, IsString, Max, Min } from 'class-validator';
import {
  HUMILITY_SCORE_MAX_NUMBER_VALIDATION,
  HUMILITY_SCORE_MIN_NUMBER_VALIDATION,
  NAME_REQUIRED_VALIDATION,
  SUPERPOWER_REQUIRED_VALIDATION,
} from '../superhero.constant';

export class CreateSuperheroDto {
  @IsString()
  @IsNotEmpty({ message: NAME_REQUIRED_VALIDATION })
  name: string;

  @IsString()
  @IsNotEmpty({ message: SUPERPOWER_REQUIRED_VALIDATION })
  superpower: string;

  @IsNotEmpty()
  @IsPositive({ message: HUMILITY_SCORE_MIN_NUMBER_VALIDATION })
  @Min(0, { message: HUMILITY_SCORE_MIN_NUMBER_VALIDATION })
  @Max(10, { message: HUMILITY_SCORE_MAX_NUMBER_VALIDATION })
  humilityScore: number;
}
