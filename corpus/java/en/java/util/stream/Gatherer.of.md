---
id: "java-en-function-gatherer-of"
language: "java"
lang: "en"
category: "function"
name: "Gatherer.of"
signature: "static <T, R> Gatherer<T, Void, R> of(Integrator<Void, T, R> integrator)"
title: "Gatherer.of"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Gatherer.of

```java
static <T, R> Gatherer<T, Void, R> of(Integrator<Void, T, R> integrator)
```

Returns a new, parallelizable, and stateless `Gatherer` described
 by the given `integrator`.

**参数**

- **integrator** — the integrator function for the new gatherer
- **the** — type of input elements for the new gatherer
- **the** — type of results for the new gatherer

**返回**

- the new `Gatherer`

**异常**

- **NullPointerException** — if any argument is `null`
