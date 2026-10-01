---
id: "java-en-function-phaser-arriveandawaitadvance"
language: "java"
lang: "en"
category: "function"
name: "Phaser.arriveAndAwaitAdvance"
signature: "public int arriveAndAwaitAdvance()"
title: "Phaser.arriveAndAwaitAdvance"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Phaser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Phaser.arriveAndAwaitAdvance

```java
public int arriveAndAwaitAdvance()
```

Arrives at this phaser and awaits others. Equivalent in effect
 to `awaitAdvance(arrive())`.  If you need to await with
 interruption or timeout, you can arrange this with an analogous
 construction using one of the other forms of the `awaitAdvance` method.  If instead you need to deregister upon
 arrival, use `awaitAdvance(arriveAndDeregister())`.

 

It is a usage error for an unregistered party to invoke this
 method.  However, this error may result in an `IllegalStateException` only upon some subsequent operation on
 this phaser, if ever.

**返回**

- the arrival phase number, or the (negative) `getPhase() current phase` if terminated

**异常**

- **IllegalStateException** — if not terminated and the number of unarrived parties would become negative
