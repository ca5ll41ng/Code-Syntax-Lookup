---
id: "java-en-function-thread-sleep"
language: "java"
lang: "en"
category: "function"
name: "Thread.sleep"
signature: "public static void sleep(long millis) throws InterruptedException"
title: "Thread.sleep"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.sleep

```java
public static void sleep(long millis) throws InterruptedException
```

Causes the currently executing thread to sleep (temporarily cease
 execution) for the specified number of milliseconds, subject to
 the precision and accuracy of system timers and schedulers. The thread
 does not lose ownership of any monitors.

**参数**

- **millis** — the length of time to sleep in milliseconds

**异常**

- **IllegalArgumentException** — if the value of `millis` is negative
- **InterruptedException** — if any thread has interrupted the current thread. The interrupted status of the current thread is cleared when this exception is thrown.
