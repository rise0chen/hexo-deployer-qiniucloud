# hexo-deployer-qiniucloud
Qiniu deployer plugin for [Hexo](http://hexo.io/).

## Installation
```bash
npm install hexo-deployer-qiniucloud --save
```

## Usage
1.sign up and login in on [qiniucloud](https://portal.qiniu.com/signup/choice).
must set it as Public
2.creat [Bucket](https://portal.qiniu.com/bucket/create).
3.get [key](https://portal.qiniu.com/user/key).
4.configure this plugin in `_config.yml`.
```yaml
deploy:
  type: qiniu
  bucket: <bucketName>
  accessKey: <accessKey>
  secretKey: <secretKey>
```
5.deploy
```bash
hexo deploy
```

6.if you need CNAME,must recharge 10RMB,then binding your [domain](https://portal.qiniu.com/domain/create).

## License
MIT
