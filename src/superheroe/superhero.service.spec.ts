import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { SuperheroResponseDto } from './dto/superheroes-response.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { SUPERHERO_ALREADY_EXISTS_RESPONSE } from './superhero.constant';
import { DEFAULT_SUPERHERO_CREATE_ERROR } from 'src/app/app.constants';

describe('SuperheroService', () => {
  let superheroService: SuperheroService;

  const mockId = 1;
  const mockDate = '2025-02-08T00:56:22.000Z';
  const mockName = 'Superman';
  const mockSuperpower = 'Strength';
  const mockHumilityScore = 5;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroService],
    }).compile();

    superheroService = module.get<SuperheroService>(SuperheroService);
  });

  it('should be defined', () => {
    expect(superheroService).toBeDefined();
  });

  describe('create', () => {
    const createSuperheroDto: CreateSuperheroDto = {
      name: mockName,
      superpower: mockSuperpower,
      humilityScore: mockHumilityScore,
    };

    const superheroResponseDto: SuperheroResponseDto = {
      id: mockId,
      name: mockName,
      superpower: mockSuperpower,
      humilityScore: mockHumilityScore,
      createdAt: mockDate,
      updatedAt: mockDate,
    };

    it('should create a superhero with success', async () => {
      jest.useFakeTimers().setSystemTime(new Date(mockDate));

      jest
        .spyOn(superheroService, 'findOneSuperhero')
        .mockResolvedValueOnce(null);

      const result = await superheroService.create(createSuperheroDto);

      expect(result).toEqual(superheroResponseDto);
    });

    it('should throw ConflictException if name already exists', async () => {
      jest.useFakeTimers().setSystemTime(new Date(mockDate));

      const existingSuperhero = {
        id: 1,
        name: mockName,
        superpower: mockSuperpower,
        humilityScore: mockHumilityScore,
        createdAt: mockDate,
        updatedAt: mockDate,
      };

      jest
        .spyOn(superheroService, 'findOneSuperhero')
        .mockResolvedValueOnce(existingSuperhero);

      await expect(superheroService.create(createSuperheroDto)).rejects.toThrow(
        new ConflictException(
          SUPERHERO_ALREADY_EXISTS_RESPONSE(createSuperheroDto.name),
        ),
      );
    });

    it('should throw InternalServerErrorException when something went wrong', async () => {
      jest.useFakeTimers().setSystemTime(new Date(mockDate));

      jest
        .spyOn(superheroService, 'findOneSuperhero')
        .mockRejectedValue(new Error());

      await expect(superheroService.create(createSuperheroDto)).rejects.toThrow(
        new InternalServerErrorException(DEFAULT_SUPERHERO_CREATE_ERROR),
      );
    });
  });
});
