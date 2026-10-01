---
id: "java-en-function-randomgeneratorfactory-all"
language: "java"
lang: "en"
category: "function"
name: "RandomGeneratorFactory.all"
signature: "public static Stream<RandomGeneratorFactory<RandomGenerator>> all()"
title: "RandomGeneratorFactory.all"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGeneratorFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomGeneratorFactory.all

```java
public static Stream<RandomGeneratorFactory<RandomGenerator>> all()
```

Returns a non-empty stream of available `RandomGeneratorFactory RandomGeneratorFactory(s)`.

 RandomGenerators that are marked as deprecated are not included in the result.

**返回**

- a non-empty stream of all available `RandomGeneratorFactory RandomGeneratorFactory(s)`.
