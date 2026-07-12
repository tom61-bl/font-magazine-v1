const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 静态资源与入口页都放在仓库根目录（index.html 当前位于根目录）
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Font Magazine is running at http://localhost:${PORT}`);
});
