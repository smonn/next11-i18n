Basic project example with Next 11, next-translate, and Vercel. This reproduces the following error for API endpoints:

```
ERROR	TypeError: Cannot read property 'defaultLocale' of undefined
  at /var/task/node_modules/next-translate/lib/cjs/getT.js:59:45
  at step (/var/task/node_modules/next-translate/lib/cjs/getT.js:33:23)
  at Object.next (/var/task/node_modules/next-translate/lib/cjs/getT.js:14:53)
  at /var/task/node_modules/next-translate/lib/cjs/getT.js:8:71
  at new Promise (<anonymous>)
  at __awaiter (/var/task/node_modules/next-translate/lib/cjs/getT.js:4:12)
  at getT (/var/task/node_modules/next-translate/lib/cjs/getT.js:48:12)
  at handler (/var/task/.next/server/pages/api.js:26:33)
  at apiResolver (/var/task/node_modules/next/dist/next-server/server/api-utils.js:8:7)
  at processTicksAndRejections (internal/process/task_queues.js:95:5)
```
