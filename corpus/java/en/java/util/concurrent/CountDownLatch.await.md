---
id: "java-en-function-countdownlatch-await"
language: "java"
lang: "en"
category: "function"
name: "CountDownLatch.await"
signature: "public void await() throws InterruptedException"
title: "CountDownLatch.await"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountDownLatch.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountDownLatch.await

```java
public void await() throws InterruptedException
```

Causes the current thread to wait until the latch has counted down to
 zero, unless the thread is `interrupt interrupted`.

 

If the current count is zero then this method returns immediately.

 

If the current count is greater than zero then the current
 thread becomes disabled for thread scheduling purposes and lies
 dormant until one of two things happen:
 
 
- The count reaches zero due to invocations of the
 `countDown` method; or
 
- Some other thread `interrupt interrupts`
 the current thread.
 

 

If the current thread:
 
 
- has its interrupted status set on entry to this method; or
 
- is `interrupt interrupted` while waiting,
 

 then `InterruptedException` is thrown and the current thread's
 interrupted status is cleared.

**异常**

- **InterruptedException** — if the current thread is interrupted while waiting
