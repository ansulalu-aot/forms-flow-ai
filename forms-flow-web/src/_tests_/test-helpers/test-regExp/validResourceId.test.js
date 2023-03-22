import isValiResourceId from '../../../helper/regExp/validResourceId';

describe('isValiResourceId', () => {
  it('should return true if input contains only numbers', () => {
    expect(isValiResourceId('123456')).toEqual(true);
  });

  it('should return false if input contains non-numeric characters', () => {
    expect(isValiResourceId('1234a6')).toEqual(false);
    expect(isValiResourceId('abc123')).toEqual(false);
    expect(isValiResourceId('1-2-3-4-5-6')).toEqual(false);
  });
});
