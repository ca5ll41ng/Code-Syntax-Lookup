---
id: "java-en-function-timeunit-sleep"
language: "java"
lang: "en"
category: "function"
name: "TimeUnit.sleep"
signature: "public void sleep(long timeout) throws InterruptedException"
title: "TimeUnit.sleep"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/TimeUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeUnit.sleep

```java
public void sleep(long timeout) throws InterruptedException
```

Performs a `sleep(long, int) Thread.sleep` using
 this time unit.
 This is a convenience method that converts time arguments into the
 form required by the `Thread.sleep` method.

**参数**

- **timeout** — the minimum time to sleep. If less than or equal to zero, do not sleep at all.

**异常**

- **InterruptedException** — if interrupted while sleeping
