---
id: "java-en-function-timeunit-timedjoin"
language: "java"
lang: "en"
category: "function"
name: "TimeUnit.timedJoin"
signature: "public void timedJoin(Thread thread, long timeout) throws InterruptedException"
title: "TimeUnit.timedJoin"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/TimeUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeUnit.timedJoin

```java
public void timedJoin(Thread thread, long timeout) throws InterruptedException
```

Performs a timed `join(long, int) Thread.join`
 using this time unit.
 This is a convenience method that converts time arguments into the
 form required by the `Thread.join` method.

**参数**

- **thread** — the thread to wait for
- **timeout** — the maximum time to wait. If less than or equal to zero, do not wait at all.

**异常**

- **InterruptedException** — if interrupted while waiting
