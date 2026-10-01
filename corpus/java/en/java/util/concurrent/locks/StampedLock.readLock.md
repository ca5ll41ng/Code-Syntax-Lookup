---
id: "java-en-function-stampedlock-readlock"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.readLock"
signature: "public long readLock()"
title: "StampedLock.readLock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.readLock

```java
public long readLock()
```

Non-exclusively acquires the lock, blocking if necessary
 until available.

**返回**

- a read stamp that can be used to unlock or convert mode
