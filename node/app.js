const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const formidable = require('formidable');
const fs = require('fs');

app.use(bodyParser());

app.use(async (ctx, next) => {
  if(ctx.url === '/img' && ctx.method === 'POST'){
    const form = formidable({ multiples: true });
    form.uploadDir = __dirname +  '\\images';
    form.keepExtensions = true
    console.log(form);
    await new Promise((resolve, reject) => {
      form.parse(ctx.req, (err, fields, files) => {
        console.log('fields:', fields);
        console.log('files:', files);
        if (err) {
          reject(err);
        }
        // 获取图片的路径，进行重命名
        const oldPath = files.file.path;
        const newPath = `${form.uploadDir}\\${fields.name}`;
        // 图片重命名
        fs.rename(oldPath, newPath, async err => {
          if(err){
            reject(err);
          }
          ctx.state = { fields, files };
          ctx.body = JSON.stringify(ctx.state, null, 2);
          resolve();
        })
      });
    });
    await next();
    
  }
  // ctx.body = 'Hello World';
  // console.log(ctx.request.files);
});

app.listen(3000, () => {
  console.log('服务已启动');
});