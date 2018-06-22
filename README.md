# hexo-deployer-qiniucloud
[Hexo](http://hexo.io/) 上的七牛云储存 部署器。

## 安装
```bash
npm install hexo-deployer-qiniucloud --save
```

## 使用
1.注册并登录[七牛云](https://portal.qiniu.com/signup?code=3l91onw71kb4i)  
2.新建一个公开的[Bucket](https://portal.qiniu.com/bucket/create)  
3.获取[key](https://portal.qiniu.com/user/key)  
4.编辑`_config.yml`文件  
```yaml
deploy:
  type: qiniucloud
  bucket: <bucketName>
  accessKey: <accessKey>
  secretKey: <secretKey>
```
5.部署  
```bash
hexo deploy
```

6.[绑定](https://portal.qiniu.com/domain/create)自定义域名。（可能需要先充值10RMB）

## 许可证
MIT

## 相关链接
[我的博客](http://blog.crise.cn/about/hexo.html)  
[github](https://github.com/rise0chen/hexo-deployer-qiniucloud)  
[七牛文档](https://developer.qiniu.com/kodo/sdk/1289/nodejs)  
