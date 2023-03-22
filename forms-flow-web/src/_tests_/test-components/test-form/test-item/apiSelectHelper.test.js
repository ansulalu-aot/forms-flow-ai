import "@testing-library/jest-dom/extend-expect";
import selectApplicationCreateAPI from '../../../../components/Form/Item/apiSelectHelper';
import { applicationCreate, publicApplicationCreate } from '../../../../apiManager/services/applicationServices';
import { draftSubmit, publicDraftSubmit } from '../../../../apiManager/services/draftService';

describe('selectApplicationCreateAPI', () => {
  it('should select draftSubmit if isAuthenticated, isDraftEnabled, and isDraftCreated are all true', () => {
    const result = selectApplicationCreateAPI(true, true, true);
    expect(result).toEqual(draftSubmit);
  });

  it('should select applicationCreate if isAuthenticated is true and isDraftEnabled and isDraftCreated are false', () => {
    const result = selectApplicationCreateAPI(true, false, false);
    expect(result).toEqual(applicationCreate);
  });

  it('should select publicApplicationCreate if isAuthenticated, isDraftEnabled, and isDraftCreated are all false', () => {
    const result = selectApplicationCreateAPI(false, false, false);
    expect(result).toEqual(publicApplicationCreate);
  });

  it('should select publicDraftSubmit if isAuthenticated is false and isDraftEnabled and isDraftCreated are true', () => {
    const result = selectApplicationCreateAPI(false, true, true);
    expect(result).toEqual(publicDraftSubmit);
  });
});