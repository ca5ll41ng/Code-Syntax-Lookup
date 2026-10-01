---
id: "java-en-function-arbitrarilyjumpablegenerator-jumppoweroftwo"
language: "java"
lang: "en"
category: "function"
name: "ArbitrarilyJumpableGenerator.jumpPowerOfTwo"
signature: "void jumpPowerOfTwo(int logDistance)"
title: "ArbitrarilyJumpableGenerator.jumpPowerOfTwo"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArbitrarilyJumpableGenerator.jumpPowerOfTwo

```java
void jumpPowerOfTwo(int logDistance)
```

Alter the state of this pseudorandom number generator so as to jump
 forward a distance equal to 2`logDistance` within
 its state cycle.

**参数**

- **logDistance** — the base-2 logarithm of the distance to jump forward within the state cycle

**异常**

- **IllegalArgumentException** — if `logDistance` is 2`logDistance` is greater than the period of this generator
