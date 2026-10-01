---
id: "java-en-function-arbitrarilyjumpablegenerator-leap"
language: "java"
lang: "en"
category: "function"
name: "ArbitrarilyJumpableGenerator.leap"
signature: "default void leap()"
title: "ArbitrarilyJumpableGenerator.leap"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArbitrarilyJumpableGenerator.leap

```java
default void leap()
```

Alter the state of this pseudorandom number generator so as to jump
 forward a very large, fixed distance (typically 2128 or
 more) within its state cycle. The distance used is that returned by
 method
 `leapDistance() leapDistance`().
