---
id: "java-en-function-reentrantlock-tostring"
language: "java"
lang: "en"
category: "function"
name: "ReentrantLock.toString"
signature: "public String toString()"
title: "ReentrantLock.toString"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantLock.toString

```java
public String toString()
```

Returns a string identifying this lock, as well as its lock state.
 The state, in brackets, includes either the String `"Unlocked"`
 or the String `"Locked by"` followed by the
 `getName name` of the owning thread.

**返回**

- a string identifying this lock, as well as its lock state
