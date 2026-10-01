---
id: "java-en-function-countdownlatch-countdown"
language: "java"
lang: "en"
category: "function"
name: "CountDownLatch.countDown"
signature: "public void countDown()"
title: "CountDownLatch.countDown"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountDownLatch.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountDownLatch.countDown

```java
public void countDown()
```

Decrements the count of the latch, releasing all waiting threads if
 the count reaches zero.

 

If the current count is greater than zero then it is decremented.
 If the new count is zero then all waiting threads are re-enabled for
 thread scheduling purposes.

 

If the current count equals zero then nothing happens.
