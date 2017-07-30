'use strict';

hexo.extend.deployer.register('qiniu', require('./lib/deployer'));

hexo.extend.console.register('img-slim', 'img slim of qiniu', {}, require('./lib/console'));
