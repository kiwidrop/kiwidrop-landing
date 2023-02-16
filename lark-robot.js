const https = require('https');

const args = process.argv.slice(2);
const env = String(args[0]).trim();
let url = '';

switch (env) {
  case 'master':
    url = 'https://app.kiwidrop.com/';
    break;
  case 'test':
    url = 'https://app.jumpo.club/';
    break;
  case 'demobox-1':
    url = 'https://demobox-1.dio8iqlzxgskf.amplifyapp.com';
    break;
  case 'demobox-2':
    url = 'https://demobox-2.dio8iqlzxgskf.amplifyapp.com';
    break;
  case 'demobox-3':
    url = 'https://demobox-3.dio8iqlzxgskf.amplifyapp.com';
    break;
  default:
    url = 'https://github.com/kiwidrop/kiwidrop-web/pulls \n(PR Demobox的地址请在你提交的PR中查看)';
}

notify = async () => {
  const body = {
    msg_type: 'post',
    content: {
      post: {
        zh_cn: {
          title: 'kiwidrop-landing',
          content: [
            [
              {
                tag: 'text',
                text: `\
分支: ${env}
状态: 打包成功！等待发布。
(注意，发布目前没有状态通知，需要手动刷新页面查看。)

正在发布中，稍后可访问下面的URL查看:
${url}
- 发布时间快则30s，如发布队列忙，可能会要2-5分钟或更久，请耐心等待。
- 如长时间没有发布成功，可以联系 @Bruce(李迅) @Jianhua 查看部署日志。
- Demobox安全验证登录名和密码同为: demobox
`,
              },
            ],
          ],
        },
      },
    },
  };

  const options = {
    hostname: 'open.larksuite.com',
    path: '/open-apis/bot/v2/hook/4d3604ff-b562-41ee-b2fc-e369afa4591e',
    method: 'POST',
  };

  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', (d) => {
      process.stdout.write(d);
    });
  });

  req.on('error', (error) => {
    console.error(error);
  });

  req.write(JSON.stringify(body));
  req.end();
};

notify();
