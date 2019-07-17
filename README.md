# build-unreachable-code

Steps to reproduce:

1. Run `ember build --environment=production`
2. Look at the build output for `services/my-service.js`

The unreachable code in the service method is removed, but not in the pure function.

```JavaScript
e.myFunction=function(){return void 0
return void 0
return}
```