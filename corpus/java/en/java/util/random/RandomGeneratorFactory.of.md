---
id: "java-en-function-randomgeneratorfactory-of"
language: "java"
lang: "en"
category: "function"
name: "RandomGeneratorFactory.of"
signature: "public static <T extends RandomGenerator> RandomGeneratorFactory<T> of(String name)"
title: "RandomGeneratorFactory.of"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGeneratorFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomGeneratorFactory.of

```java
public static <T extends RandomGenerator> RandomGeneratorFactory<T> of(String name)
```

Returns a `RandomGeneratorFactory` that can produce instances of
 `RandomGenerator` that utilize the `name`
 algorithm.

**参数**

- **name** — Name of random number generator algorithm
- **Sub-interface** — of `RandomGenerator` to produce

**返回**

- `RandomGeneratorFactory` of `RandomGenerator`

**异常**

- **NullPointerException** — if name is null
- **IllegalArgumentException** — if the named algorithm is not found
