---
id: "java-en-function-integrator-of"
language: "java"
lang: "en"
category: "function"
name: "Integrator.of"
signature: "static <A, T, R> Integrator<A, T, R> of(Integrator<A, T, R> integrator)"
title: "Integrator.of"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Integrator.of

```java
static <A, T, R> Integrator<A, T, R> of(Integrator<A, T, R> integrator)
```

Factory method for turning Integrator-shaped lambdas into
 Integrators.

**参数**

- **integrator** — a lambda to create as Integrator
- **the** — type of state used by this integrator
- **the** — type of elements this integrator receives
- **the** — type of results this integrator can produce

**返回**

- the given lambda as an Integrator
