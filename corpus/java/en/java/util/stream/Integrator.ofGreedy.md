---
id: "java-en-function-integrator-ofgreedy"
language: "java"
lang: "en"
category: "function"
name: "Integrator.ofGreedy"
signature: "static <A, T, R> Greedy<A, T, R> ofGreedy(Greedy<A, T, R> greedy)"
title: "Integrator.ofGreedy"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Gatherer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Integrator.ofGreedy

```java
static <A, T, R> Greedy<A, T, R> ofGreedy(Greedy<A, T, R> greedy)
```

Factory method for turning Integrator-shaped lambdas into
 `Greedy` Integrators.

**参数**

- **greedy** — a lambda to create as Integrator.Greedy
- **the** — type of state used by this integrator
- **the** — type of elements this integrator receives
- **the** — type of results this integrator can produce

**返回**

- the given lambda as a Greedy Integrator
