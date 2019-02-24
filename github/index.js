const config = require('./config');
const { Application } = require('./Application')
const wip = require('@codesherpas/wip');

const baseURL = '/github'
const apps = [
    {
        name: 'wip',
        handle: wip.handle,
        type: 'status'
    }
]

function register(api) {
    apps.forEach( app => {
        console.log('Registering app: ', app)
        api.post(`${baseURL}/${app.name}`, registerApp(app))
    
    })
}

function registerApp(app) {
    return async function(req, res) {
        try {
            const body = JSON.parse(req.body.toString('utf-8'))
            const ghapp = new Application(body, req.headers, app, config[app.name])

            try {
                ghapp.validate()
            } catch(e) {
                return res.status(401).json({message: 'Not authorized to make this request'});
            }


            await ghapp.init()
            await ghapp.getConfig()
            await ghapp.handle()
            return res.status(200).json({message: 'Successfully handled request'})
        } catch(e) {
            console.log(e)
            return res.status(500).json({message: 'Error process request'})
        }
    }
}

module.exports = { register, apps }