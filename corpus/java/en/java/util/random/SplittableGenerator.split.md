---
id: "java-en-function-splittablegenerator-split"
language: "java"
lang: "en"
category: "function"
name: "SplittableGenerator.split"
signature: "SplittableGenerator split()"
title: "SplittableGenerator.split"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SplittableGenerator.split

```java
SplittableGenerator split()
```

Returns a new pseudorandom number generator, split off from this one,
 that implements the `RandomGenerator` and
 `SplittableGenerator` interfaces.

 

 This pseudorandom number generator may be used as a source of
 pseudorandom bits used to initialize the state of the new one.

**返回**

- a new object that implements the `RandomGenerator` and `SplittableGenerator` interfaces
