import { STEPPER_ROUTES, FORM_CREATE_ROUTE } from '../../../../components/Form/constants/stepperConstants';

describe('routes', () => {
  describe('STEPPER_ROUTES', () => {
    it('should be an array', () => {
      expect(Array.isArray(STEPPER_ROUTES)).toBe(true);
    });

    it('should contain "edit", "view-edit", and "preview"', () => {
      expect(STEPPER_ROUTES).toContain('edit');
      expect(STEPPER_ROUTES).toContain('view-edit');
      expect(STEPPER_ROUTES).toContain('preview');
    });
  });

  describe('FORM_CREATE_ROUTE', () => {
    it('should be a string', () => {
      expect(typeof FORM_CREATE_ROUTE).toBe('string');
    });

    it('should be equal to "create"', () => {
      expect(FORM_CREATE_ROUTE).toEqual('create');
    });
  });
});
