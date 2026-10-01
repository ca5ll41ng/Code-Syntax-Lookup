---
id: "java-en-function-splittablegenerator-rngs"
language: "java"
lang: "en"
category: "function"
name: "SplittableGenerator.rngs"
signature: "default Stream<RandomGenerator> rngs()"
title: "SplittableGenerator.rngs"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SplittableGenerator.rngs

```java
default Stream<RandomGenerator> rngs()
```

Returns an effectively unlimited stream of new pseudorandom number
 generators, each of which implements the `RandomGenerator`
 interface. Ideally the generators in the stream will appear to be
 statistically independent.

**返回**

- a stream of objects that implement the `RandomGenerator` interface
