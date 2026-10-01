---
id: "java-en-function-stampedlock-validate"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.validate"
signature: "public boolean validate(long stamp)"
title: "StampedLock.validate"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.validate

```java
public boolean validate(long stamp)
```

Returns true if the lock has not been exclusively acquired
 since issuance of the given stamp. Always returns false if the
 stamp is zero. Always returns true if the stamp represents a
 currently held lock. Invoking this method with a value not
 obtained from `tryOptimisticRead` or a locking method
 for this lock has no defined effect or result.

**参数**

- **stamp** — a stamp

**返回**

- `true` if the lock has not been exclusively acquired since issuance of the given stamp; else false
