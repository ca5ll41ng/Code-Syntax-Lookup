---
id: "java-en-function-forkjoinpool-getasyncmode"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.getAsyncMode"
signature: "public boolean getAsyncMode()"
title: "ForkJoinPool.getAsyncMode"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.getAsyncMode

```java
public boolean getAsyncMode()
```

Returns `true` if this pool uses local first-in-first-out
 scheduling mode for forked tasks that are never joined.

**返回**

- `true` if this pool uses async mode
