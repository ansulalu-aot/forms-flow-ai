import { ERROR_CLASSNAME, ERROR_LINTING_CLASSNAME, SUCCESS_MSG, ERROR_MSG } from '../../../../components/Modeler/constants/bpmnModelerConstants';

describe('constants', () => {
  test('ERROR_CLASSNAME should be "has-error"', () => {
    expect(ERROR_CLASSNAME).toBe('has-error');
  });

  test('ERROR_LINTING_CLASSNAME should be "bjsl-button-error"', () => {
    expect(ERROR_LINTING_CLASSNAME).toBe('bjsl-button-error');
  });

  test('SUCCESS_MSG should be "Diagram Deployed"', () => {
    expect(SUCCESS_MSG).toBe('Diagram Deployed');
  });

  test('ERROR_MSG should be "Deployment Failed"', () => {
    expect(ERROR_MSG).toBe('Deployment Failed');
  });
});
