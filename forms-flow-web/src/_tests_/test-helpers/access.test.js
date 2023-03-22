import { setFormAndSubmissionAccess } from '../../helper/access';

describe('setFormAndSubmissionAccess', () => {
  test('should return empty array if designer role is not defined', () => {
    const data = [
      { type: 'RESOURCE_ID', roleId: '123' },
      { type: 'REVIEWER', roleId: '456' },
      { type: 'ANONYMOUS', roleId: '789' },
    ];
    const result = setFormAndSubmissionAccess('formAccess', data);
    expect(result).toEqual([]);
  });

  test('should return form access roles array', () => {
    const data = [
      { type: 'CLIENT', roleId: '111' },
      { type: 'DESIGNER', roleId: '222' },
      { type: 'REVIEWER', roleId: '333' },
    ];
    const result = setFormAndSubmissionAccess('formAccess', data);
    expect(result).toEqual([
      {
        type: 'read_all',
        roles: ['111', '222', '333'],
      },
      {
        type: 'update_all',
        roles: ['222'],
      },
      {
        type: 'delete_all',
        roles: ['222'],
      },
    ]);
  });

  test('should return submission access roles array', () => {
    const data = [
      { type: 'CLIENT', roleId: '111' },
      { type: 'DESIGNER', roleId: '222' },
      { type: 'REVIEWER', roleId: '333' },
    ];
    const result = setFormAndSubmissionAccess('submissionAccess', data);
    expect(result).toEqual([
      {
        roles: ['222'],
        type: 'create_all',
      },
      {
        roles: ['333'],
        type: 'read_all',
      },
      {
        roles: ['333'],
        type: 'update_all',
      },
      {
        roles: ['222', '333'],
        type: 'delete_all',
      },
      {
        roles: ['111'],
        type: 'create_own',
      },
      {
        roles: ['111'],
        type: 'read_own',
      },
      {
        roles: ['111'],
        type: 'update_own',
      },
      {
        roles: ['333'],
        type: 'delete_own',
      },
    ]);
  });
});
