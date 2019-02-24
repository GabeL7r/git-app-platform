let pulumi = require("@pulumi/pulumi");
let config = new pulumi.Config()
let wipConfig = new pulumi.Config('wip');
let titleLintConfig = new pulumi.Config('titleLint');
let env;

if (config.require('env') === 'prod') {
    env = require('../.env.js')
} else {
    env = require('../.env.dev.js');
}

module.exports = {
	env: config.require('env'),
	sentry: { dsn: config.require('sentryDSN') },
    titleLint: {
        appId: titleLintConfig.require('appId'),
        privateKey: env.titleLint,
        secret: titleLintConfig.require("secret")
    },
    wip: {
        appId: wipConfig.require('appId'),
        privateKey: env.wip,
        secret: wipConfig.require("secret")
    }

};
