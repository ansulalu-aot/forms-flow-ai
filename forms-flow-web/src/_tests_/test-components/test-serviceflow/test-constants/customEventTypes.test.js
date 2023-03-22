import { CUSTOM_EVENT_TYPE } from '../../../../components/ServiceFlow/constants/customEventTypes';

describe('CUSTOM_EVENT_TYPE', () => {
  it('should have the correct values', () => {
    expect(CUSTOM_EVENT_TYPE.RELOAD_TASKS).toEqual('reloadTasks');
    expect(CUSTOM_EVENT_TYPE.RELOAD_CURRENT_TASK).toEqual('reloadCurrentTask');
    expect(CUSTOM_EVENT_TYPE.CUSTOM_SUBMIT_DONE).toEqual('customSubmitDone');
    expect(CUSTOM_EVENT_TYPE.ACTION_COMPLETE).toEqual('actionComplete');
    expect(CUSTOM_EVENT_TYPE.CANCEL_SUBMISSION).toEqual('cancelSubmission');
  });
});
