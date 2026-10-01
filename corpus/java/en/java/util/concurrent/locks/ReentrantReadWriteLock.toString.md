---
id: "java-en-function-reentrantreadwritelock-tostring"
language: "java"
lang: "en"
category: "function"
name: "ReentrantReadWriteLock.toString"
signature: "public String toString()"
title: "ReentrantReadWriteLock.toString"
directive: "method"
module: "java.base/java.util.concurrent.locks"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReentrantReadWriteLock.toString

```java
public String toString()
```

Returns a string identifying this lock, as well as its lock state.
 The state, in brackets, includes the String `"Write locks ="`
 followed by the number of reentrantly held write locks, and the
 String `"Read locks ="` followed by the number of held
 read locks.

**返回**

- a string identifying this lock, as well as its lock state
