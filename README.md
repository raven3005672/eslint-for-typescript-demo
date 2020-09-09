# eslint-for-typescript-demo


git config user.name
yanglinbj01
git config user.email
yanglinbj01@fenbi.com

git config --global user.name "Your_username"
git config --global user.email "Your_email"

操作记录

```
npm install --save-dev eslint babel-eslint eslint-config-alloy
touch .eslintrc.js

npx eslint index.js [--fix]
```

```
npm install --save-dev typescript @typescript-eslint/parser
npm install --save-dev @typescript-eslint/eslint-plugin

编辑 .eslintrc.js
// off 关闭 warn 警告【不阻断】 error报错【阻断】

npx eslint index.ts
```




