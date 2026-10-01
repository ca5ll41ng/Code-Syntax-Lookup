---
id: "java-en-function-thread-interrupt"
language: "java"
lang: "en"
category: "function"
name: "Thread.interrupt"
signature: "public void interrupt()"
title: "Thread.interrupt"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.interrupt

```java
public void interrupt()
```

Interrupts this thread.

 

 If this thread is blocked in an invocation of the `wait`, `wait`, or `wait` methods of the `Object`
 class, or of the `join`, `join`, `join`, `sleep`, or `sleep`
 methods of this class, then its interrupted status will be cleared and it
 will receive an `InterruptedException`.

 

 If this thread is blocked in an I/O operation upon an `java.nio.channels.InterruptibleChannel InterruptibleChannel`
 then the channel will be closed, the thread's interrupted
 status will be set, and the thread will receive a `java.nio.channels.ClosedByInterruptException`.

 

 If this thread is blocked in a `java.nio.channels.Selector`
 then the thread's interrupted status will be set and it will return
 immediately from the selection operation, possibly with a non-zero
 value, just as if the selector's `wakeup wakeup` method were invoked.

 

 If none of the previous conditions hold then this thread's interrupted
 status will be set. 

 

 Interrupting a thread that is not alive need not have any effect.

 that is not alive still records that the interrupt request was made and
 will report it via `interrupted` and `isInterrupted`.

**参见**

- ##thread-interruption Thread Interruption
- #isInterrupted()
