---
id: "java-en-function-timeunit-timedwait"
language: "java"
lang: "en"
category: "function"
name: "TimeUnit.timedWait"
signature: "public void timedWait(Object obj, long timeout) throws InterruptedException"
title: "TimeUnit.timedWait"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/TimeUnit.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimeUnit.timedWait

```java
public void timedWait(Object obj, long timeout) throws InterruptedException
```

Performs a timed `wait(long, int) Object.wait`
 using this time unit.
 This is a convenience method that converts timeout arguments
 into the form required by the `Object.wait` method.

 

For example, you could implement a blocking `poll` method
 (see `poll(long, TimeUnit) BlockingQueue.poll`)
 using:

 
```
 `public E poll(long timeout, TimeUnit unit)
     throws InterruptedException {
   synchronized (lock) {
     while (isEmpty()) {
       unit.timedWait(lock, timeout);
       ...
     `
   }
 }}
```

**参数**

- **obj** — the object to wait on
- **timeout** — the maximum time to wait. If less than or equal to zero, do not wait at all.

**异常**

- **IllegalMonitorStateException** — if the current thread is not the owner of the object's monitor.
- **InterruptedException** — if interrupted while waiting
