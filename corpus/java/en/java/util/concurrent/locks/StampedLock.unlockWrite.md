---
id: "java-en-function-stampedlock-unlockwrite"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.unlockWrite"
signature: "public void unlockWrite(long stamp)"
title: "StampedLock.unlockWrite"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.unlockWrite

```java
public void unlockWrite(long stamp)
```

If the lock state matches the given stamp, releases the
 exclusive lock.

**参数**

- **stamp** — a stamp returned by a write-lock operation

**异常**

- **IllegalMonitorStateException** — if the stamp does not match the current state of this lock
