---
id: "java-en-function-stampedlock-aswritelock"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.asWriteLock"
signature: "public Lock asWriteLock()"
title: "StampedLock.asWriteLock"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.asWriteLock

```java
public Lock asWriteLock()
```

Returns a plain `Lock` view of this StampedLock in which
 the `lock` method is mapped to `writeLock`,
 and similarly for other methods. The returned Lock does not
 support a `Condition`; method `newCondition`
 throws `UnsupportedOperationException`.

**返回**

- the lock
