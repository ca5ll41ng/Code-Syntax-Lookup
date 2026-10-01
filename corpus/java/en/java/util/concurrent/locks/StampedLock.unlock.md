---
id: "java-en-function-stampedlock-unlock"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.unlock"
signature: "public void unlock(long stamp)"
title: "StampedLock.unlock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.unlock

```java
public void unlock(long stamp)
```

If the lock state matches the given stamp, releases the
 corresponding mode of the lock.

**参数**

- **stamp** — a stamp returned by a lock operation

**异常**

- **IllegalMonitorStateException** — if the stamp does not match the current state of this lock
