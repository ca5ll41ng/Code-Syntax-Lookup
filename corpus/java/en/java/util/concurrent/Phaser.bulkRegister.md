---
id: "java-en-function-phaser-bulkregister"
language: "java"
lang: "en"
category: "function"
name: "Phaser.bulkRegister"
signature: "public int bulkRegister(int parties)"
title: "Phaser.bulkRegister"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Phaser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Phaser.bulkRegister

```java
public int bulkRegister(int parties)
```

Adds the given number of new unarrived parties to this phaser.
 If an ongoing invocation of `onAdvance` is in progress,
 this method may await its completion before returning.  If this
 phaser has a parent, and the given number of parties is greater
 than zero, and this phaser previously had no registered
 parties, this child phaser is also registered with its parent.
 If this phaser is terminated, the attempt to register has no
 effect, and a negative value is returned.

**参数**

- **parties** — the number of additional parties required to advance to the next phase

**返回**

- the arrival phase number to which this registration applied.  If this value is negative, then this phaser has terminated, in which case registration has no effect.

**异常**

- **IllegalStateException** — if attempting to register more than the maximum supported number of parties
- **IllegalArgumentException** — if `parties < 0`
