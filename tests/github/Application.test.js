const { Application } = require('../../github/Application.js');


describe('Application', () => {
    it('can read config', () => {
        const app = {name: 'wip'}
        const ghapp = new Application(null, null, app)

        expect(ghapp.secret).toBe(null)
    
    })
})
