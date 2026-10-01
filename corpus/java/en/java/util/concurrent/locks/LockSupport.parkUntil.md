---
id: "java-en-function-locksupport-parkuntil"
language: "java"
lang: "en"
category: "function"
name: "LockSupport.parkUntil"
signature: "public static void parkUntil(Object blocker, long deadline)"
title: "LockSupport.parkUntil"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/LockSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LockSupport.parkUntil

```java
public static void parkUntil(Object blocker, long deadline)
```

Disables the current thread for thread scheduling purposes, until
 the specified deadline, unless the permit is available.

 

If the permit is available then it is consumed and the call
 returns immediately; otherwise the current thread becomes disabled
 for thread scheduling purposes and lies dormant until one of four
 things happens:

 
 
- Some other thread invokes `unpark unpark` with the
 current thread as the target; or

 
- Some other thread `interrupt interrupts` the
 current thread; or

 
- The specified deadline passes; or

 
- The call spuriously (that is, for no reason) returns.
 

 

This method does not report which of these caused the
 method to return. Callers should re-check the conditions which caused
 the thread to park in the first place. Callers may also determine,
 for example, the interrupted status of the thread, or the current time
 upon return.

**参数**

- **blocker** — the synchronization object responsible for this thread parking
- **deadline** — the absolute time, in milliseconds from the Epoch, to wait until

> *Since 1.6*
