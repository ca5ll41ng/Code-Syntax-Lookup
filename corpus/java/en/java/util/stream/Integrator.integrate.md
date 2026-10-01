---
id: "java-en-function-integrator-integrate"
language: "java"
lang: "en"
category: "function"
name: "Integrator.integrate"
signature: "boolean integrate(A state, T element, Downstream<? super R> downstream)"
title: "Integrator.integrate"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Integrator.integrate

```java
boolean integrate(A state, T element, Downstream<? super R> downstream)
```

Performs an action given: the current state, the next element, and
 a downstream object; potentially inspecting and/or updating
 the state, optionally sending any number of elements downstream
 -- and then returns whether more elements are to be consumed or not.

**参数**

- **state** — The state to integrate into
- **element** — The element to integrate
- **downstream** — The downstream object of this integration

**返回**

- `true` if subsequent integration is desired, `false` if not
