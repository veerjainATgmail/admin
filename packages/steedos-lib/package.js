Package.describe({
	name: 'steedos:lib',
	version: '0.0.1',
	summary: 'Steedos libraries',
	git: ''
});

Npm.depends({
  "tough-cookie":"2.2.1"
});

Package.onUse(function(api) { 
	api.versionsFrom('1.0');

	api.use('reactive-var');
	api.use('reactive-dict');
	api.use('coffeescript');
	api.use('random');
	api.use('ddp');
	api.use('check');
	api.use('ddp-rate-limiter');
	api.use('underscore');
	api.use('tracker');
	api.use('session');
	api.use('underscorestring:underscore.string');
	api.use('monbro:mongodb-mapreduce-aggregation@1.0.1');
	api.use('nimble:restivus');
	api.use('aldeed:simple-schema');
	api.use('aldeed:collection2');
	api.use('aldeed:autoform');
	api.use('aldeed:autoform-select2');
	api.use('ongoworks:security');
	api.use('steedos:tabular');
	api.use('blaze-html-templates');
	api.use('matb33:collection-hooks');

	api.use(['webapp'], 'server');


	// TAPi18n
	api.use('templating', 'client');
	var _ = Npm.require('underscore');

	api.use('tap:i18n', ['client', 'server']);
	//api.add_files("package-tap.i18n", ["client", "server"]);
	tapi18nFiles = ['i18n/en.i18n.json', 'i18n/zh-CN.i18n.json']
	api.addFiles(tapi18nFiles, ['client', 'server']);
	api.imply('tap:i18n');
	
	// COMMON
	api.addFiles('lib/core.coffee');
	api.addFiles('lib/tapi18n.coffee');

	api.addFiles('lib/models/_base.js');
	api.addFiles('lib/models/apps.js');
	api.addFiles('lib/models/users.js');
	api.addFiles('lib/models/spaces.js');
	api.addFiles('lib/models/space_users.js');
	api.addFiles('lib/models/organizations.js');


	// EXPORT
	api.export('Steedos');
});

Package.onTest(function(api) {

});
