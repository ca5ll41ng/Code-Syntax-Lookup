---
id: "java-en-function-streamablegenerator-rngs"
language: "java"
lang: "en"
category: "function"
name: "StreamableGenerator.rngs"
signature: "Stream<RandomGenerator> rngs()"
title: "StreamableGenerator.rngs"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamableGenerator.rngs

```java
Stream<RandomGenerator> rngs()
```

Returns an effectively unlimited stream of objects, each of which
 implements the `RandomGenerator` interface. Ideally the
 generators in the stream will appear to be statistically independent.
 The new generators are of the same
 algorithm as this generator.

           equivalent to `rngs(long) rngs`
           (`MAX_VALUE Long.MAX_VALUE`).

**返回**

- a stream of objects that implement the `RandomGenerator` interface
