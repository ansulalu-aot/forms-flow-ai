import {
    RESUBMITTED_STATUS_EVENT,
    ACKNOWLEDGED_EVENT,
    RESUBMIT_STATUS,
    AWAITING_ACKNOWLEDGEMENT,
    CLIENT_EDIT_STATUS,
    UPDATE_EVENT_STATUS,
    getProcessDataReq,
  } from '../../constants/applicationConstants';
  
  describe('moduleName', () => {
    describe('Constants', () => {
      it('should export RESUBMITTED_STATUS_EVENT constant', () => {
        expect(RESUBMITTED_STATUS_EVENT).toBeDefined();
      });
  
      it('should export ACKNOWLEDGED_EVENT constant', () => {
        expect(ACKNOWLEDGED_EVENT).toBeDefined();
      });
  
      it('should export RESUBMIT_STATUS constant', () => {
        expect(RESUBMIT_STATUS).toBeDefined();
      });
  
      it('should export AWAITING_ACKNOWLEDGEMENT constant', () => {
        expect(AWAITING_ACKNOWLEDGEMENT).toBeDefined();
      });
  
      it('should export CLIENT_EDIT_STATUS constant', () => {
        expect(CLIENT_EDIT_STATUS).toBeDefined();
        expect(CLIENT_EDIT_STATUS).toContain(RESUBMIT_STATUS);
        expect(CLIENT_EDIT_STATUS).toContain(AWAITING_ACKNOWLEDGEMENT);
      });
  
      it('should export UPDATE_EVENT_STATUS constant', () => {
        expect(UPDATE_EVENT_STATUS).toBeDefined();
        expect(UPDATE_EVENT_STATUS).toContain(RESUBMIT_STATUS);
        expect(UPDATE_EVENT_STATUS).toContain(AWAITING_ACKNOWLEDGEMENT);
      });
    });
  
    describe('getProcessDataReq', () => {
      it('should return null for unknown application status', () => {
        const applicationDetail = {
          processInstanceId: '123',
          applicationStatus: 'Unknown Status',
        };
  
        expect(getProcessDataReq(applicationDetail)).toBeNull();
      });
  
      it('should return correct data for AWAITING_ACKNOWLEDGEMENT status', () => {
        const applicationDetail = {
          processInstanceId: '123',
          applicationStatus: AWAITING_ACKNOWLEDGEMENT,
        };
  
        const expectedData = {
          messageName: ACKNOWLEDGED_EVENT,
          processInstanceId: '123',
        };
  
        expect(getProcessDataReq(applicationDetail)).toEqual(expectedData);
      });
  
      it('should return correct data for RESUBMIT_STATUS status', () => {
        const applicationDetail = {
          processInstanceId: '123',
          applicationStatus: RESUBMIT_STATUS,
        };
  
        const expectedData = {
          messageName: RESUBMITTED_STATUS_EVENT,
          processInstanceId: '123',
        };
  
        expect(getProcessDataReq(applicationDetail)).toEqual(expectedData);
      });
    });
  });
  