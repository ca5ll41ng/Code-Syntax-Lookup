---
id: "java-en-function-thread-join"
language: "java"
lang: "en"
category: "function"
name: "Thread.join"
signature: "public final void join(long millis) throws InterruptedException"
title: "Thread.join"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.join

```java
public final void join(long millis) throws InterruptedException
```

Waits at most `millis` milliseconds for this thread to terminate.
 A timeout of `0` means to wait forever.
 This method returns immediately, without waiting, if the thread has not
 been `start() started`.

 This implementation uses a loop of `this.wait` calls
 conditioned on `this.isAlive`. As a thread terminates the
 `this.notifyAll` method is invoked. It is recommended that
 applications not use `wait`, `notify`, or
 `notifyAll` on `Thread` instances.

**参数**

- **millis** — the time to wait in milliseconds

**异常**

- **IllegalArgumentException** — if the value of `millis` is negative
- **InterruptedException** — if any thread has interrupted the current thread. The interrupted status of the current thread is cleared when this exception is thrown.
