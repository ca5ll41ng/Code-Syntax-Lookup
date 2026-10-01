---
id: "java-en-function-arbitrarilyjumpablegenerator-jump"
language: "java"
lang: "en"
category: "function"
name: "ArbitrarilyJumpableGenerator.jump"
signature: "void jump(double distance)"
title: "ArbitrarilyJumpableGenerator.jump"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArbitrarilyJumpableGenerator.jump

```java
void jump(double distance)
```

Alter the state of this pseudorandom number generator so as to jump
 forward a specified distance within its state cycle.

**参数**

- **distance** — the distance to jump forward within the state cycle

**异常**

- **IllegalArgumentException** — if `distance` is not greater than or equal to 0.0, or is greater than the period of this generator
