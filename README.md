#NYC-FUNC-NAME-TEST

Steps.
1. Run `npm install`
2. Run `npm test`

```
D:\projects\test-nyc>npm test

> test-nyc@0.0.1 test D:\projects\test-nyc
> mocha --opts mocha.opts



  nyc Behaviour for ES2015
    √ should return the name of function


  1 passing (10ms)




```

All tests should pass.


2. Run `npm run test:nyc`

Test fails  
```
D:\projects\test-nyc>npm run test:nyc

> test-nyc@0.0.1 test:nyc D:\projects\test-nyc
> nyc mocha --opts mocha.opts



  nyc Behaviour for ES2015
    1) should return the name of function


  0 passing (12ms)
  1 failing

  1) nyc Behaviour for ES2015 should return the name of function:

      AssertionError: expected '' to equal 'fn'
      + expected - actual

      +fn

      at Context.it (lib\specs\function_name.spec.ts:1:55)



-----------------------|----------|----------|----------|----------|----------------|
File                   |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------------------|----------|----------|----------|----------|----------------|
All files              |    85.71 |      100 |    66.67 |    85.71 |                |
 function_name.spec.ts |    85.71 |      100 |    66.67 |    85.71 |              7 |
-----------------------|----------|----------|----------|----------|----------------|

npm ERR! Windows_NT 10.0.14393
npm ERR! argv "C:\\Program Files\\nodejs\\node.exe" "C:\\Users\\<Redacted>\\AppData\\Roaming\\npm\\node_modules\\npm\\bin\\npm-cli.js" "run" "test:nyc"
npm ERR! node v7.2.1
npm ERR! npm  v4.0.5
npm ERR! code ELIFECYCLE
npm ERR! test-nyc@0.0.1 test:nyc: `nyc mocha --opts mocha.opts`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the test-nyc@0.0.1 test:nyc script 'nyc mocha --opts mocha.opts'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
npm ERR! If you do, this is most likely a problem with the test-nyc package,
npm ERR! not with npm itself.
npm ERR! Tell the author that this fails on your system:
npm ERR!     nyc mocha --opts mocha.opts
npm ERR! You can get information on how to open an issue for this project with:
npm ERR!     npm bugs test-nyc
npm ERR! Or if that isn't available, you can get their info via:
npm ERR!     npm owner ls test-nyc
npm ERR! There is likely additional logging output above.

npm ERR! Please include the following file with any support request:
npm ERR!     D:\projects\test-nyc\npm-debug.log

D:\projects\test-nyc>npm run test:nyc




```
