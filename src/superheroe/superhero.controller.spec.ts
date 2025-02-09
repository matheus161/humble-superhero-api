import { SuperheroController } from './superhero.controller';

describe('SuperheroController', () => {
  let controller: SuperheroController;
  const superheroServiceMock = {
    create: jest.fn(),
  };

  beforeEach(() => {
    controller = new SuperheroController(superheroServiceMock as any);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should use the SuperheroService/create with the correct argument', async () => {
    const argument = { key: 'value' };
    const expected = { anyKey: 'anyValue' };

    jest.spyOn(superheroServiceMock, 'create').mockResolvedValue(expected);

    const result = await controller.create(argument as any);

    expect(superheroServiceMock.create).toHaveBeenCalledWith(argument);
    expect(result).toEqual(expected);
  });
});
