---
id: "java-en-function-lock-lock"
language: "java"
lang: "en"
category: "function"
name: "Lock.lock"
signature: "void lock()"
title: "Lock.lock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/Lock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Lock.lock

```java
void lock()
```

Acquires the lock.

 

If the lock is not available then the current thread becomes
 disabled for thread scheduling purposes and lies dormant until the
 lock has been acquired.

 

**Implementation Considerations**

 

A `Lock` implementation may be able to detect erroneous use
 of the lock, such as an invocation that would cause deadlock, and
 may throw an (unchecked) exception in such circumstances.  The
 circumstances and the exception type must be documented by that
 `Lock` implementation.
