---
id: "java-en-function-thread-interrupted"
language: "java"
lang: "en"
category: "function"
name: "Thread.interrupted"
signature: "public static boolean interrupted()"
title: "Thread.interrupted"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.interrupted

```java
public static boolean interrupted()
```

Tests whether the current thread has been interrupted.  The
 interrupted status of the thread is cleared by this method.  In
 other words, if this method were to be called twice in succession, the
 second call would return false (unless the current thread were
 interrupted again, after the first call had cleared its interrupted
 status and before the second call had examined it).

 for cases that detect `#thread-interruption thread interruption`
 and clear the interrupted status before throwing `InterruptedException`.
 It may also be useful for cases that implement an uninterruptible
 method that makes use of an interruptible method such as
 `park`. The `interrupted()` method can be used
 to test if interrupted and clear the interrupted status to allow the code
 retry the interruptible method. The uninterruptible method
 should restore the interrupted status before it completes.

**返回**

- `true` if the current thread has been interrupted; `false` otherwise.

**参见**

- ##thread-interruption Thread Interruption
- #isInterrupted()
