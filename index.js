// intentionally vulnerable demo (DO NOT DEPLOY)
const express = require('express');
const { exec } = require('child_process');

const app = express();

// ❌ コマンドインジェクション: ユーザー入力をそのままexecに渡す
app.get('/run', (req, res) => {
  const cmd = req.query.cmd || 'echo hello';
  exec(cmd, (err, stdout, stderr) => {
    if (err) return res.status(500).send(String(err));
    res.type('text').send(stdout || stderr || 'done');
  });
});

// おまけのヘルスチェック
app.get('/', (_, res) => res.send('vuln demo up'));

app.listen(3000, () => console.log('listening on :3000'));
