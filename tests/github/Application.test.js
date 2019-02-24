const fs = require('fs');
const path = require('path');
const { Application } = require('../../github/Application.js');

const config = {
    appId: 25948,
    secret: 'ca0344b9-6d1f-40ba-ab92-6907fe4299c3',
    privateKey: fs.readFileSync(path.join(__dirname, 'example.pem'), { encoding: 'utf-8' })
}

describe('Application', () => {
    describe('validate', () => {
        it('does not throw an error if request is from github', () => {
 			const req = require('./mocks/labeled.json');
			const ghapp = new Application(req.body, req.headers, null, config)

			expect( () => ghapp.validate()).not.toThrow()
        })

		it('throws an error if secret is not in config', () => {
			const req = require('./mocks/labeled.json');
			const ghapp = new Application(req.body, req.headers, null, {})

			expect( () => ghapp.validate()).toThrow(new Error("Secret not found for application"))
		})	

	
		it('throws an error if request is not from github', () => {
			const req = require('./mocks/labeled.json');
			req.body.foo = 'bar';
			const ghapp = new Application(req.body, req.headers, null, config)

			expect( () => ghapp.validate()).toThrow(new Error("Signature does not match event payload and secert"))
		})
    })
    
	describe('getConfig', () => {
		it('returns default config if none exists in repo', async () => {
			const req = require('./mocks/labeled.json');
			const ghapp = new Application(req.body, req.headers, null, config)

			await ghapp.init()
			await ghapp.getConfig()
			expect(ghapp.config).toEqual({"wip": {"terms": ["wip", "do not merge", "help wanted"]}})
		})
    })
    
	/*
    describe('constructor', () => {
    
    })
    describe('constructor', () => {
    
    })
    describe('constructor', () => {
    
    })
    describe('constructor', () => {
    
    })
    describe('constructor', () => {
    
    })
    describe('constructor', () => {
    
    })

    describe('constructor', () => {
    
    })

    describe('constructor', () => {
    
    })

    describe('constructor', () => {
    
    })

    describe('constructor', () => {
    
    })

    describe('constructor', () => {
    
    })

    describe('constructor', () => {
    
    })

    describe('constructor', () => {
    
    })

    describe('constructor', () => {
    
    })

    describe('constructor', () => {
    
    })
    */
})
