---
id: "java-en-function-threadpoolexecutor-isterminating"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.isTerminating"
signature: "public boolean isTerminating()"
title: "ThreadPoolExecutor.isTerminating"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.isTerminating

```java
public boolean isTerminating()
```

Returns true if this executor is in the process of terminating
 after `shutdown` or `shutdownNow` but has not
 completely terminated.  This method may be useful for
 debugging. A return of `true` reported a sufficient
 period after shutdown may indicate that submitted tasks have
 ignored or suppressed interruption, causing this executor not
 to properly terminate.

**返回**

- `true` if terminating but not yet terminated
