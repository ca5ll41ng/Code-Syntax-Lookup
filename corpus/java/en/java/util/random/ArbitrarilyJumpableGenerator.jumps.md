---
id: "java-en-function-arbitrarilyjumpablegenerator-jumps"
language: "java"
lang: "en"
category: "function"
name: "ArbitrarilyJumpableGenerator.jumps"
signature: "default Stream<ArbitrarilyJumpableGenerator> jumps(double distance)"
title: "ArbitrarilyJumpableGenerator.jumps"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArbitrarilyJumpableGenerator.jumps

```java
default Stream<ArbitrarilyJumpableGenerator> jumps(double distance)
```

Returns an effectively unlimited stream of new pseudorandom number
 generators, each of which implements the
 `ArbitrarilyJumpableGenerator` interface, produced by jumping
 copies of this generator by different integer multiples of the
 specified jump distance.

 `jumps(long) jumps`
 (`MAX_VALUE Long.MAX_VALUE`).

**参数**

- **distance** — a distance to jump forward within the state cycle

**返回**

- a stream of objects that implement the `RandomGenerator` interface

**异常**

- **IllegalArgumentException** — if `distance` is not greater than or equal to 0.0, or is greater than the period of this generator
