---
id: "java-en-function-reentrantlock-islocked"
language: "java"
lang: "en"
category: "function"
name: "ReentrantLock.isLocked"
signature: "public boolean isLocked()"
title: "ReentrantLock.isLocked"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantLock.isLocked

```java
public boolean isLocked()
```

Queries if this lock is held by any thread. This method is
 designed for use in monitoring of the system state,
 not for synchronization control.

**返回**

- `true` if any thread holds this lock and `false` otherwise
