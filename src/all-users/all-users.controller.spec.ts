import { Test, TestingModule } from '@nestjs/testing';
import { AllUsersController } from './all-users.controller';
import { AllUsersService } from './all-users.service';

describe('AllUsersController', () => {
  let controller: AllUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllUsersController],
      providers: [AllUsersService],
    }).compile();

    controller = module.get<AllUsersController>(AllUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
