import { MaterialModule } from './materials.module';

describe('MaterialModule', () => {
  let materialsModule: MaterialModule;

  beforeEach(() => {
    materialsModule = new MaterialModule();
  });

  it('should create an instance', () => {
    expect(materialsModule).toBeTruthy();
  });
});
