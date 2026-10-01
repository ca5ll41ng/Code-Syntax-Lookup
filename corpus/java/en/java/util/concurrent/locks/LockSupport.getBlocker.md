---
id: "java-en-function-locksupport-getblocker"
language: "java"
lang: "en"
category: "function"
name: "LockSupport.getBlocker"
signature: "public static Object getBlocker(Thread t)"
title: "LockSupport.getBlocker"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/LockSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LockSupport.getBlocker

```java
public static Object getBlocker(Thread t)
```

Returns the blocker object supplied to the most recent
 invocation of a park method that has not yet unblocked, or null
 if not blocked.  The value returned is just a momentary
 snapshot -- the thread may have since unblocked or blocked on a
 different blocker object.

**参数**

- **t** — the thread

**返回**

- the blocker

**异常**

- **NullPointerException** — if argument is null

> *Since 1.6*
