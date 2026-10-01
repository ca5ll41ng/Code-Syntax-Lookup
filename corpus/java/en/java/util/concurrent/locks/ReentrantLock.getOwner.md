---
id: "java-en-function-reentrantlock-getowner"
language: "java"
lang: "en"
category: "function"
name: "ReentrantLock.getOwner"
signature: "protected Thread getOwner()"
title: "ReentrantLock.getOwner"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantLock.getOwner

```java
protected Thread getOwner()
```

Returns the thread that currently owns this lock, or
 `null` if not owned. When this method is called by a
 thread that is not the owner, the return value reflects a
 best-effort approximation of current lock status. For example,
 the owner may be momentarily `null` even if there are
 threads trying to acquire the lock but have not yet done so.
 This method is designed to facilitate construction of
 subclasses that provide more extensive lock monitoring
 facilities.

**返回**

- the owner, or `null` if not owned
