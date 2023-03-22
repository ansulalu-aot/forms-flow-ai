import { featureFlags } from '../featureToogle';

// describe('getEnv function', () => {
//   const originalEnv = process.env;

//   beforeEach(() => {
//     // Reset the process environment variables before each test
//     process.env = { ...originalEnv };
//   });

//   afterEach(() => {
//     // Restore the original process environment variables after each test
//     process.env = originalEnv;
//   });

//   test('should return true when env variable is "true"', () => {
//     process.env.REACT_APP_EXPORT_PDF_ENABLED = 'true';

//     expect(getEnv('REACT_APP_EXPORT_PDF_ENABLED')).toBe(true);
//   });

//   test('should return false when env variable is "false"', () => {
//     process.env.REACT_APP_EXPORT_PDF_ENABLED = 'false';

//     expect(getEnv('REACT_APP_EXPORT_PDF_ENABLED')).toBe(false);
//   });

//   test('should return false when env variable is not set', () => {
//     delete process.env.REACT_APP_EXPORT_PDF_ENABLED;

//     expect(getEnv('REACT_APP_EXPORT_PDF_ENABLED')).toBe(false);
//   });

//   test('should return true when window._env_ is set to true', () => {
//     window._env_ = { REACT_APP_EXPORT_PDF_ENABLED: true };

//     expect(getEnv('REACT_APP_EXPORT_PDF_ENABLED')).toBe(true);
//   });

//   test('should return false when window._env_ is set to false', () => {
//     window._env_ = { REACT_APP_EXPORT_PDF_ENABLED: false };

//     expect(getEnv('REACT_APP_EXPORT_PDF_ENABLED')).toBe(false);
//   });

//   test('should return false when window._env_ is not set', () => {
//     delete window._env_;

//     expect(getEnv('REACT_APP_EXPORT_PDF_ENABLED')).toBe(false);
//   });
// });

describe('featureFlags object', () => {
  test('should have the correct properties', () => {
    expect(featureFlags).toHaveProperty('exportPdf');
  });

  test('should have the correct values', () => {
    expect(featureFlags.exportPdf).toBe(false);
  });
});
