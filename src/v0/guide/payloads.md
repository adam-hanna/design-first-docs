---
title: Payloads
type: guide
order: 4
vue_version: 0.0.1
---

Payloads are data that users send the server. They can be included in a combination of the url path (e.g. `/foo/:fooID`), query parameters (e.g. `/foos?bar=baz`) and request body.

The payload that an endpoint can receive is first specified in the `./design.json` file:

```json
{
  "api": { ... },
  "services": [
    {
      "name": "foos",
      "path": "/foos",
      "descirption": "CRUD the foos",
      "actions": [
        {
          "name": "show",
          "description":  "Return foo by fooID",
          "method": "GET",
          "path": "/:fooID",
          "payload": "ShowFooPayload",
          "response": "Foo"
        },
        { ... }
      ]
    },
    { ... }
  ]
}
```

The payload must then be a named export of the `models` submodule.

```
my-first-api
│   ...
│
└src
    │
    │
    └...
    │
    │
    └models
        │   index.ts
        │
        │
        └foos
            │   index.ts
```

**./src/models/foos/index.ts**
```typescript
import { IsInt, Min } from 'class-validator';

export class Foo { ... }

type showFooPayloadProps = {
  fooID: string;
}

export class ShowFooPayload {
  constructor({ fooID }: showFooPayloadProps) {
    this.fooID = parseInt(fooID);
  }

  @IsInt()
  @Min(0)
  public fooID: number;
}

```

**./src/models/index.ts**
```typescript
// note: all of your models should be exported, here

export * from './foos';
```

design-first uses [class-validator](https://github.com/typestack/class-validator) for payload validation. class-validator has many validation options, including custom-defined functions. Any [validation errors](https://github.com/typestack/class-validator#validation-errors) will be returned back to the user with a [400 http status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400).

design-first requires that all payload classes have a constructor function that has one object as a parameter.

Further note that payload variables passed to the server in the url path or in the query parameters can only be passed as `string`'s. Any necessary type conversions will need to performed in the `constructor` function.

Payload validation is second in the request chain, after middleware, and before authentication.
