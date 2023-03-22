describe('Application Name', () => {

    it('should use custom name when provided as an environment variable', () => {
        process.env.REACT_APP_APPLICATION_NAME = 'Custom Name';
        const applicationName = require('../../constants/constants').APPLICATION_NAME;
        expect(applicationName).toBe('Custom Name');
    });

    it('should use custom name when provided as a window variable', () => {
        window._env_ = { REACT_APP_APPLICATION_NAME: 'Custom Name' };
        const applicationName = require('../../constants/constants').APPLICATION_NAME;
        expect(applicationName).toBe('Custom Name');
    });

});