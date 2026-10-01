---
id: "java-en-function-reentrantreadwritelock-haswaiters"
language: "java"
lang: "en"
category: "function"
name: "ReentrantReadWriteLock.hasWaiters"
signature: "public boolean hasWaiters(Condition condition)"
title: "ReentrantReadWriteLock.hasWaiters"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantReadWriteLock.hasWaiters

```java
public boolean hasWaiters(Condition condition)
```

Queries whether any threads are waiting on the given condition
 associated with the write lock. Note that because timeouts and
 interrupts may occur at any time, a `true` return does
 not guarantee that a future `signal` will awaken any
 threads.  This method is designed primarily for use in
 monitoring of the system state.

**参数**

- **condition** — the condition

**返回**

- `true` if there are any waiting threads

**异常**

- **IllegalMonitorStateException** — if this lock is not held
- **IllegalArgumentException** — if the given condition is not associated with this lock
- **NullPointerException** — if the condition is null
