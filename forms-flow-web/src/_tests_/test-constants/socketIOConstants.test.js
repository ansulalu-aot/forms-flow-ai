import { WEBSOCKET_ENCRYPT_KEY } from '../../constants/socketIOConstants';

describe('WEBSOCKET_ENCRYPT_KEY', () => {
    const originalEnv = process.env;

    beforeEach(() => {
        jest.resetModules();
        process.env = { ...originalEnv };
        delete window._env_;
    });

    afterEach(() => {
        process.env = originalEnv;
    });

    it('should be defined', () => {
        expect(WEBSOCKET_ENCRYPT_KEY).toBeDefined();
    });

    it('should be a string', () => {
        expect(typeof WEBSOCKET_ENCRYPT_KEY).toBe('string');
    });

    it('should have a value', () => {
        expect(WEBSOCKET_ENCRYPT_KEY).toBeTruthy();
    });

    it('should use process.env.REACT_APP_WEBSOCKET_ENCRYPT_KEY if defined', () => {
        const mockValue = 'mock-value';
        process.env.REACT_APP_WEBSOCKET_ENCRYPT_KEY = mockValue;
        const { WEBSOCKET_ENCRYPT_KEY } = require('../../constants/socketIOConstants');
        expect(WEBSOCKET_ENCRYPT_KEY).toBe(mockValue);
    });

    it('should use window._env_.REACT_APP_WEBSOCKET_ENCRYPT_KEY if defined', () => {
        const mockValue = 'mock-value';
        window._env_ = { REACT_APP_WEBSOCKET_ENCRYPT_KEY: mockValue };
        const { WEBSOCKET_ENCRYPT_KEY } = require('../../constants/socketIOConstants');
        expect(WEBSOCKET_ENCRYPT_KEY).toBe(mockValue);
    });

});