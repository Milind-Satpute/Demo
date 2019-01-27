import { AssettypeModule } from './assettype.module';

describe('AssettypeModule', () => {
  let assettypeModule: AssettypeModule;

  beforeEach(() => {
    assettypeModule = new AssettypeModule();
  });

  it('should create an instance', () => {
    expect(assettypeModule).toBeTruthy();
  });
});
