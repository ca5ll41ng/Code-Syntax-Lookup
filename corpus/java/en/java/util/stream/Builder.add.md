---
id: "java-en-function-builder-add"
language: "java"
lang: "en"
category: "function"
name: "Builder.add"
signature: "default Builder add(double t)"
title: "Builder.add"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.add

```java
default Builder add(double t)
```

Adds an element to the stream being built.

 The default implementation behaves as if:
 
```
`accept(t)
     return this;
 `
```

**参数**

- **t** — the element to add

**返回**

- `this` builder

**异常**

- **IllegalStateException** — if the builder has already transitioned to the built state
