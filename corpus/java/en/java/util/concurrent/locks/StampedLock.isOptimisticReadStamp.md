---
id: "java-en-function-stampedlock-isoptimisticreadstamp"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.isOptimisticReadStamp"
signature: "public static boolean isOptimisticReadStamp(long stamp)"
title: "StampedLock.isOptimisticReadStamp"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.isOptimisticReadStamp

```java
public static boolean isOptimisticReadStamp(long stamp)
```

Tells whether a stamp represents a successful optimistic read.

**参数**

- **stamp** — a stamp returned by a previous StampedLock operation

**返回**

- `true` if the stamp was returned by a successful optimistic read operation, that is, a non-zero return from `tryOptimisticRead` or `tryConvertToOptimisticRead`

> *Since 10*
