---
id: "java-en-function-arbitrarilyjumpablegenerator-copyandjump"
language: "java"
lang: "en"
category: "function"
name: "ArbitrarilyJumpableGenerator.copyAndJump"
signature: "default ArbitrarilyJumpableGenerator copyAndJump(double distance)"
title: "ArbitrarilyJumpableGenerator.copyAndJump"
directive: "method"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ArbitrarilyJumpableGenerator.copyAndJump

```java
default ArbitrarilyJumpableGenerator copyAndJump(double distance)
```

Copy this generator, jump this generator forward, then return the
 copy.

 returns the copy.

**参数**

- **distance** — a distance to jump forward within the state cycle

**返回**

- a copy of this generator object before the jump occurred

**异常**

- **IllegalArgumentException** — if `distance` is not greater than or equal to 0.0, or is greater than the period of this generator
