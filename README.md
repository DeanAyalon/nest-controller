A basic NestJS application to demonstrate 
[logger-decorator Issue #124](https://github.com/pustovitDmytro/logger-decorator/issues/124)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
``````

Within the lines the console should print out on startup are:
```
[RoutesResolver] UnmappedController {/unmapped}:
    // Nothing - As the methods inside fail to map
[RoutesResolver] MappedController {/mapped}:
[RouterExplorer] Mapped {/mapped, GET} route
[RouterExplorer] Mapped {/mapped/works, GET} route
    // route /mapped/fails does not get mapped
```

Further information can be found within the code

[UnmappedController](./src/unmapped/unmapped.controller.ts), 
[MappedController](./src/mapped/mapped.controller.ts)