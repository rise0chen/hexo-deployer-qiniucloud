'use strict';

var fs = require('hexo-fs');
var request = require('request');

var img = '/static/img/';
module.exports = function(args){
  var imgDir = this.source_dir+img;
  var files = fs.listDirSync(imgDir);
  files.forEach(function(filePath){
    var localFile = imgDir+filePath;
    var key = filePath.replace(/\\/g, "\/");
    var url = hexo.config.url+img+key+'?imageView2/2/w/800/h/2000/interlace/1/q/75|imageslim';
    request({url: url,encoding: null}, function (err, response, content) {
      if(!err && (response.statusCode==200)){
        fs.writeFile(localFile, content, (err)=>{
          if(err){
            console.log(err);
          }else{
            console.log('Success: wrote "'+key+'"');
          }
        });
      }else{console.log(err + response.statusCode);}
    });
    return;
  });
}
