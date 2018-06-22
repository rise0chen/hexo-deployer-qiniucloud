# hexo-deployer-qiniucloud
Qiniu deployer plugin for [Hexo](http://hexo.io/).

## Installation
```bash
npm install hexo-deployer-qiniucloud --save
```

## Usage
1.sign up and login in on [qiniucloud](https://portal.qiniu.com/signup?code=3l91onw71kb4i)  
2.creat a 'Public' [Bucket](https://portal.qiniu.com/bucket/create)  
3.get [key](https://portal.qiniu.com/user/key)  
4.configure this plugin in `_config.yml`  
```yaml
deploy:
  type: qiniucloud
  bucket: <bucketName>
  accessKey: <accessKey>
  secretKey: <secretKey>
```
5.deploy  
```bash
hexo deploy
```

6.[binding](https://portal.qiniu.com/domain/create) your domain.(Maybe you need recharge 10RMB)

## License
MIT

## Reference
[my blog](http://blog.crise.cn/about/hexo.html)  
[github](https://github.com/rise0chen/hexo-deployer-qiniucloud)  
[doc of qiniu](https://developer.qiniu.com/kodo/sdk/1289/nodejs)  
