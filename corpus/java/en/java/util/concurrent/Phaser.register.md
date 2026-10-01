---
id: "java-en-function-phaser-register"
language: "java"
lang: "en"
category: "function"
name: "Phaser.register"
signature: "public int register()"
title: "Phaser.register"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Phaser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Phaser.register

```java
public int register()
```

Adds a new unarrived party to this phaser.  If an ongoing
 invocation of `onAdvance` is in progress, this method
 may await its completion before returning.  If this phaser has
 a parent, and this phaser previously had no registered parties,
 this child phaser is also registered with its parent. If
 this phaser is terminated, the attempt to register has
 no effect, and a negative value is returned.

**返回**

- the arrival phase number to which this registration applied.  If this value is negative, then this phaser has terminated, in which case registration has no effect.

**异常**

- **IllegalStateException** — if attempting to register more than the maximum supported number of parties
