---
id: "java-en-function-readlock-readlock"
language: "java"
lang: "en"
category: "function"
name: "ReadLock.ReadLock"
signature: "protected ReadLock(ReentrantReadWriteLock lock)"
title: "ReadLock.ReadLock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReadLock.ReadLock

```java
protected ReadLock(ReentrantReadWriteLock lock)
```

Constructor for use by subclasses.

**参数**

- **lock** — the outer lock object

**异常**

- **NullPointerException** — if the lock is null
