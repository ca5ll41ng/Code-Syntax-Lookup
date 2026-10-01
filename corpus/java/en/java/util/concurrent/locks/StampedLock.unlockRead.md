---
id: "java-en-function-stampedlock-unlockread"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.unlockRead"
signature: "public void unlockRead(long stamp)"
title: "StampedLock.unlockRead"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.unlockRead

```java
public void unlockRead(long stamp)
```

If the lock state matches the given stamp, releases the
 non-exclusive lock.

**参数**

- **stamp** — a stamp returned by a read-lock operation

**异常**

- **IllegalMonitorStateException** — if the stamp does not match the current state of this lock
