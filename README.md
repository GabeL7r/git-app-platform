## Purpose
Platform to deploy git applications.

### Adding New Application
1. Create application on GitHub.
2. Note application id
3. Create a webhook [secret](https://wwwdgenerator.net/) and add it to application.
4. Download the private key
5. Install application ```npm install @codesherpas/<app>```
6. Add application and webhook secret to pulumi
```bash
pulumi select workspace github-apps-dev
pulumi config set fooApp:appId app_id
pulumi config set --secret fooApp:secret this_is_a_secret
```
7. Add private key to .env.js or .env.staging.js file
8. Update github/apps to include new application
9. Deploy
```bash
make deploy-prod
make deploy-dev #a separate application is needed for a dev environment
```

### TODO
* Add support for BitBucket
* Improve test coverage
* Run tests before deploy to prod

