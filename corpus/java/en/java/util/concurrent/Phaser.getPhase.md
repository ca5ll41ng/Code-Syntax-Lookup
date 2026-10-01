---
id: "java-en-function-phaser-getphase"
language: "java"
lang: "en"
category: "function"
name: "Phaser.getPhase"
signature: "public final int getPhase()"
title: "Phaser.getPhase"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Phaser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Phaser.getPhase

```java
public final int getPhase()
```

Returns the current phase number. The maximum phase number is
 `Integer.MAX_VALUE`, after which it restarts at
 zero. Upon termination, the phase number is negative,
 in which case the prevailing phase prior to termination
 may be obtained via `getPhase() + Integer.MIN_VALUE`.

**返回**

- the phase number, or a negative value if terminated
