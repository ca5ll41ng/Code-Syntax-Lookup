---
id: "java-en-function-phaser-awaitadvanceinterruptibly"
language: "java"
lang: "en"
category: "function"
name: "Phaser.awaitAdvanceInterruptibly"
signature: "public int awaitAdvanceInterruptibly(int phase) throws InterruptedException"
title: "Phaser.awaitAdvanceInterruptibly"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Phaser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Phaser.awaitAdvanceInterruptibly

```java
public int awaitAdvanceInterruptibly(int phase) throws InterruptedException
```

Awaits the phase of this phaser to advance from the given phase
 value, throwing `InterruptedException` if interrupted
 while waiting, or returning immediately if the current phase is
 not equal to the given phase value or this phaser is
 terminated.

**参数**

- **phase** — an arrival phase number, or negative value if terminated; this argument is normally the value returned by a previous call to `arrive` or `arriveAndDeregister`.

**返回**

- the next arrival phase number, or the argument if it is negative, or the (negative) `getPhase() current phase` if terminated

**异常**

- **InterruptedException** — if thread interrupted while waiting
