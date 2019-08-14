---
title: Models
type: guide
order: 307
vue_version: 0.0.1
---

Models are used throughout the api as payloads and responses. Payloads are sent from users to the api. Responses are sent from the api to users.

```
my-first-api
│   ...
│
│
│
│
│
└src
    │
    │
    └models
    │   │   index.ts
    │
    │
    │
    │
    │
    │
    └...
```

Models are allowed to be organized into submodules and subdirectories, but each defined model must be exported directly from `./src/models/index.ts`. Only named exports and not default exports are allowed.

**./src/models/foos/index.ts**
```typescript
import { RequestPayload, MalformedPayloadError } from 'design-first';
import { IsInt, Min } from 'class-validator';

export class Foo { ... }

export class ShowFooPayload {
  constructor(props: RequestPayload) {
    try {
      this.fooID = parseInt(props.params.fooID);
    } catch (e) {
      throw new MalformedPayloadError("fooID must be an integer");
    }
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
