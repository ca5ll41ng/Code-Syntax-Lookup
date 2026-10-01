---
id: "java-en-function-locksupport-park"
language: "java"
lang: "en"
category: "function"
name: "LockSupport.park"
signature: "public static void park(Object blocker)"
title: "LockSupport.park"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/LockSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LockSupport.park

```java
public static void park(Object blocker)
```

Disables the current thread for thread scheduling purposes unless the
 permit is available.

 

If the permit is available then it is consumed and the call returns
 immediately; otherwise
 the current thread becomes disabled for thread scheduling
 purposes and lies dormant until one of three things happens:

 
 
- Some other thread invokes `unpark unpark` with the
 current thread as the target; or

 
- Some other thread `interrupt interrupts`
 the current thread; or

 
- The call spuriously (that is, for no reason) returns.
 

 

This method does not report which of these caused the
 method to return. Callers should re-check the conditions which caused
 the thread to park in the first place. Callers may also determine,
 for example, the interrupted status of the thread upon return.

**参数**

- **blocker** — the synchronization object responsible for this thread parking

> *Since 1.6*
