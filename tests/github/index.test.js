const { apps } = require('../../github/apps.js');


apps.forEach( app => {
    describe(app.name, () => {
        it('has a name', () => {
            expect(app.name).not.toBe(null);
        })
        it('has a type', () => {
            expect(app.type).toEqual(expect.stringMatching(/status|review|action/))
        })
        it('has a handler', () => {
            expect(typeof app.handle).toBe('function')
        })
    })
})
