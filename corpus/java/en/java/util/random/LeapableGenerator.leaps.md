---
id: "java-en-function-leapablegenerator-leaps"
language: "java"
lang: "en"
category: "function"
name: "LeapableGenerator.leaps"
signature: "default Stream<JumpableGenerator> leaps()"
title: "LeapableGenerator.leaps"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LeapableGenerator.leaps

```java
default Stream<JumpableGenerator> leaps()
```

Returns an effectively unlimited stream of new pseudorandom number
 generators, each of which implements the `JumpableGenerator`
 interface.

 `leaps(long) leaps`
 (`MAX_VALUE Long.MAX_VALUE`).

 calls `copy() copy`() and `leap() leap`()
 on this generator, and the copies become the generators produced by the stream.

**返回**

- a stream of objects that implement the `JumpableGenerator` interface
