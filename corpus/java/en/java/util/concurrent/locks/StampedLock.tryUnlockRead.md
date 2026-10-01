---
id: "java-en-function-stampedlock-tryunlockread"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.tryUnlockRead"
signature: "public boolean tryUnlockRead()"
title: "StampedLock.tryUnlockRead"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.tryUnlockRead

```java
public boolean tryUnlockRead()
```

Releases one hold of the read lock if it is held, without
 requiring a stamp value. This method may be useful for recovery
 after errors.

**返回**

- `true` if the read lock was held, else false
