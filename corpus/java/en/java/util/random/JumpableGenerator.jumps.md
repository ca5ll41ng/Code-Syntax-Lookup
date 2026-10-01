---
id: "java-en-function-jumpablegenerator-jumps"
language: "java"
lang: "en"
category: "function"
name: "JumpableGenerator.jumps"
signature: "default Stream<RandomGenerator> jumps()"
title: "JumpableGenerator.jumps"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# JumpableGenerator.jumps

```java
default Stream<RandomGenerator> jumps()
```

Returns an effectively unlimited stream of new pseudorandom number
 generators, each of which implements the `RandomGenerator`
 interface.

 `jumps(long) jumps`
 (`MAX_VALUE Long.MAX_VALUE`).

 calls `copy copy`() and `jump jump`()
 on this generator, and the copies become the generators produced by the stream.

**返回**

- a stream of objects that implement the `RandomGenerator` interface
