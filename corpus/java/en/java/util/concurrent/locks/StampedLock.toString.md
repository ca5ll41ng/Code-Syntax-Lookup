---
id: "java-en-function-stampedlock-tostring"
language: "java"
lang: "en"
category: "function"
name: "StampedLock.toString"
signature: "public String toString()"
title: "StampedLock.toString"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/StampedLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StampedLock.toString

```java
public String toString()
```

Returns a string identifying this lock, as well as its lock
 state.  The state, in brackets, includes the String `"Unlocked"` or the String `"Write-locked"` or the String
 `"Read-locks:"` followed by the current number of
 read-locks held.

**返回**

- a string identifying this lock, as well as its lock state
