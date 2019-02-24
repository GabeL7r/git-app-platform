## Purpose
Platform to deploy git applications.

### Adding New Application
* Create application on GitHub.
* Get endpoint from pulumi and add to app
* Create a webhook [secret](https://wwwdgenerator.net/) and add it to application.
* Note application id
* Download the private key
* Install application ```npm install @codesherpas/<app>```
* Add application and webhook secret to pulumi
```bash
pulumi select workspace github-apps-dev
pulumi config set fooApp:appId app_id
pulumi config set --secret fooApp:secret this_is_a_secret
```
* Add private key to .env.js or .env.staging.js file
* Update github/apps to include new application
* Update github/config to fetch new config values
* Deploy
```bash
make deploy-prod
make deploy-dev #a separate application is needed for a dev environment
```

### TODO
* Add support for BitBucket
* Improve test coverage
* Run tests before deploy to prod

