---
id: "java-en-function-locksupport-setcurrentblocker"
language: "java"
lang: "en"
category: "function"
name: "LockSupport.setCurrentBlocker"
signature: "public static void setCurrentBlocker(Object blocker)"
title: "LockSupport.setCurrentBlocker"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/LockSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LockSupport.setCurrentBlocker

```java
public static void setCurrentBlocker(Object blocker)
```

Sets the object to be returned by invocations of `getBlocker getBlocker` for the current thread. This method may
 be used before invoking the no-argument version of `park` from non-public objects, allowing
 more helpful diagnostics, or retaining compatibility with
 previous implementations of blocking methods.  Previous values
 of the blocker are not automatically restored after blocking.
 To obtain the effects of `park(b`}, use `setCurrentBlocker(b); park(); setCurrentBlocker(null);`

**参数**

- **blocker** — the blocker object

> *Since 14*
