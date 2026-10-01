---
id: "java-en-function-phaser-arriveandderegister"
language: "java"
lang: "en"
category: "function"
name: "Phaser.arriveAndDeregister"
signature: "public int arriveAndDeregister()"
title: "Phaser.arriveAndDeregister"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Phaser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Phaser.arriveAndDeregister

```java
public int arriveAndDeregister()
```

Arrives at this phaser and deregisters from it without waiting
 for others to arrive. Deregistration reduces the number of
 parties required to advance in future phases.  If this phaser
 has a parent, and deregistration causes this phaser to have
 zero parties, this phaser is also deregistered from its parent.

 

It is a usage error for an unregistered party to invoke this
 method.  However, this error may result in an `IllegalStateException` only upon some subsequent operation on
 this phaser, if ever.

**返回**

- the arrival phase number, or a negative value if terminated

**异常**

- **IllegalStateException** — if not terminated and the number of registered or unarrived parties would become negative
