---
id: "java-en-function-gatherer-ofsequential"
language: "java"
lang: "en"
category: "function"
name: "Gatherer.ofSequential"
signature: "static <T, R> Gatherer<T, Void, R> ofSequential( Integrator<Void, T, R> integrator)"
title: "Gatherer.ofSequential"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Gatherer.ofSequential

```java
static <T, R> Gatherer<T, Void, R> ofSequential( Integrator<Void, T, R> integrator)
```

Returns a new, sequential, and stateless `Gatherer` described by
 the given `integrator`.

**参数**

- **integrator** — the integrator function for the new gatherer
- **the** — type of input elements for the new gatherer
- **the** — type of results for the new gatherer

**返回**

- the new `Gatherer`

**异常**

- **NullPointerException** — if the argument is `null`
