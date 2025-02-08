import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { SuperheroModule } from 'src/superheroe/superhero.module';
import { SuperheroService } from 'src/superheroe/superhero.service';
import { CreateSuperheroDto } from 'src/superheroe/dto/create-superhero.dto';
import { SUPERHERO_ALREADY_EXISTS_RESPONSE } from 'src/superheroe/superhero.constant';

describe('SuperheroController (e2e)', () => {
  let app: INestApplication;
  let superheroService: SuperheroService;

  const mockDate = '2025-02-08T00:56:22.000Z';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SuperheroModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    superheroService = moduleFixture.get<SuperheroService>(SuperheroService);

    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('POST /superheroes', () => {
    const createSuperheroDto: CreateSuperheroDto = {
      name: 'Superman',
      superpower: 'Strength',
      humilityScore: 9,
    };

    it('should create a superhero successfully', async () => {
      const mockSuperhero = {
        id: 1,
        name: 'Superman',
        superpower: 'Strength',
        humilityScore: 9,
        createdAt: mockDate,
        updatedAt: mockDate,
      };

      jest.useFakeTimers().setSystemTime(new Date(mockDate));

      const response = await request(app.getHttpServer())
        .post('/superheroes')
        .send(createSuperheroDto)
        .expect(HttpStatus.CREATED);

      expect(response.body).toEqual(mockSuperhero);
    });

    it('should throw ConflictException if superhero already exists', async () => {
      jest.useFakeTimers().setSystemTime(new Date(mockDate));

      await request(app.getHttpServer())
        .post('/superheroes')
        .send(createSuperheroDto)
        .expect(HttpStatus.CREATED);

      const response = await request(app.getHttpServer())
        .post('/superheroes')
        .send(createSuperheroDto)
        .expect(HttpStatus.CONFLICT);

      expect(response.body.message).toBe(
        SUPERHERO_ALREADY_EXISTS_RESPONSE(createSuperheroDto.name),
      );
    });

    it('should throw InternalServerErrorException if there is a server error', async () => {
      const mockError = new Error();

      jest.spyOn(superheroService, 'create').mockRejectedValue(mockError);

      const response = await request(app.getHttpServer())
        .post('/superheroes')
        .send(createSuperheroDto)
        .expect(HttpStatus.INTERNAL_SERVER_ERROR);

      expect(response.body.message).toBe('Internal server error');
    });
  });
});
