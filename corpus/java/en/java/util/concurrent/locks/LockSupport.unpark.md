---
id: "java-en-function-locksupport-unpark"
language: "java"
lang: "en"
category: "function"
name: "LockSupport.unpark"
signature: "public static void unpark(Thread thread)"
title: "LockSupport.unpark"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/LockSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LockSupport.unpark

```java
public static void unpark(Thread thread)
```

Makes available the permit for the given thread, if it
 was not already available.  If the thread was blocked on
 `park` then it will unblock.  Otherwise, its next call
 to `park` is guaranteed not to block. This operation
 is not guaranteed to have any effect at all if the given
 thread has not been started.

**参数**

- **thread** — the thread to unpark, or `null`, in which case this operation has no effect
