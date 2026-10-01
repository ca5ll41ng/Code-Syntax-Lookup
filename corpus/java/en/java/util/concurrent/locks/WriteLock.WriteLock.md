---
id: "java-en-function-writelock-writelock"
language: "java"
lang: "en"
category: "function"
name: "WriteLock.WriteLock"
signature: "protected WriteLock(ReentrantReadWriteLock lock)"
title: "WriteLock.WriteLock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WriteLock.WriteLock

```java
protected WriteLock(ReentrantReadWriteLock lock)
```

Constructor for use by subclasses.

**参数**

- **lock** — the outer lock object

**异常**

- **NullPointerException** — if the lock is null
