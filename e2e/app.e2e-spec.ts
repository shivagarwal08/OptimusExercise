import { OptimusExercisePage } from './app.po';

describe('optimus-exercise App', function() {
  let page: OptimusExercisePage;

  beforeEach(() => {
    page = new OptimusExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
