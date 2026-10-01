---
id: "java-en-function-stampedlock-tryoptimisticread"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.tryOptimisticRead"
signature: "public long tryOptimisticRead()"
title: "StampedLock.tryOptimisticRead"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.tryOptimisticRead

```java
public long tryOptimisticRead()
```

Returns a stamp that can later be validated, or zero
 if exclusively locked.

**返回**

- a valid optimistic read stamp, or zero if exclusively locked
