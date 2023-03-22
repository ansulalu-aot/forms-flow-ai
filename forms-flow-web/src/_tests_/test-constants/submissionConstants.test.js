import { defaultSubmissionData } from '../../constants/submissionConstants';

describe('defaultSubmissionData', () => {
  test('should have the correct properties', () => {
    expect(defaultSubmissionData).toHaveProperty('limit', 1);
    expect(defaultSubmissionData).toHaveProperty('pagination', {
      page: 1,
      numPages: 1,
      total: 1,
    });
    expect(defaultSubmissionData).toHaveProperty('sort', '');
    expect(defaultSubmissionData).toHaveProperty('submissions', []);
  });
});
