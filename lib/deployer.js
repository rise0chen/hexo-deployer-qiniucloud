'use strict';

var fs = require('hexo-fs');
var qiniu = require('qiniu');

module.exports = function(args){
  if(!args.bucket || !args.accessKey || !args.secretKey){
    console.log('No args in _config.yml of deploy');
    return;
  }
  console.log('Uploading...');

  var mac = new qiniu.auth.digest.Mac(args.accessKey, args.secretKey);
  var config = new qiniu.conf.Config();
  config.zone = qiniu.zone.Zone_z0;
  
  var publicDir = this.public_dir
  var files = fs.listDirSync(publicDir);
  files.forEach(function(filePath){
    var localFile = publicDir+filePath;
    var key = filePath.replace(/\\/g, "\/");

    var options ={scope: args.bucket + ":" + key};
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken=putPolicy.uploadToken(mac);
    
    var putExtra = new qiniu.form_up.PutExtra();
    var formUploader = new qiniu.form_up.FormUploader(config);
    ///* 文件上传
    formUploader.putFile(uploadToken, key, localFile, putExtra, function(respErr, respBody, respInfo){
      if(respErr){
        throw respErr;
      }
      if(respInfo.statusCode == 200){
        console.log('Success: '+localFile);
      }else{
        console.log('Warning: '+respInfo.statusCode);
        console.log(respBody);
      }
    });
    //*/
  });
};
