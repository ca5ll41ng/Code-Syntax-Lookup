---
id: "java-en-function-writelock-tostring"
language: "java"
lang: "en"
category: "function"
name: "WriteLock.toString"
signature: "public String toString()"
title: "WriteLock.toString"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WriteLock.toString

```java
public String toString()
```

Returns a string identifying this lock, as well as its lock
 state.  The state, in brackets includes either the String
 `"Unlocked"` or the String `"Locked by"`
 followed by the `getName name` of the owning thread.

**返回**

- a string identifying this lock, as well as its lock state
