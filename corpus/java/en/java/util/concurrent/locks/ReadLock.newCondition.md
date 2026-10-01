---
id: "java-en-function-readlock-newcondition"
language: "java"
lang: "en"
category: "function"
name: "ReadLock.newCondition"
signature: "public Condition newCondition()"
title: "ReadLock.newCondition"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReadLock.newCondition

```java
public Condition newCondition()
```

Throws `UnsupportedOperationException` because
 `ReadLocks` do not support conditions.

**异常**

- **UnsupportedOperationException** — always
