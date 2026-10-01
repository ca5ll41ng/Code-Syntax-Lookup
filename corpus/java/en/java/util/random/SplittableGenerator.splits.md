---
id: "java-en-function-splittablegenerator-splits"
language: "java"
lang: "en"
category: "function"
name: "SplittableGenerator.splits"
signature: "default Stream<SplittableGenerator> splits()"
title: "SplittableGenerator.splits"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SplittableGenerator.splits

```java
default Stream<SplittableGenerator> splits()
```

Returns an effectively unlimited stream of new pseudorandom number
 generators, each of which implements the `SplittableGenerator`
 interface.

 

 This pseudorandom number generator may be used as a source of
 pseudorandom bits used to initialize the state the new ones.

 equivalent to `splits(long) splits`
 (`MAX_VALUE Long.MAX_VALUE`).

 `splits`.

**返回**

- a stream of `SplittableGenerator` objects
