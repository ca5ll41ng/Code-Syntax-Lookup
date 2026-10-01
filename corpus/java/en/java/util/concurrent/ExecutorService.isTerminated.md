---
id: "java-en-function-executorservice-isterminated"
language: "java"
lang: "en"
category: "function"
name: "ExecutorService.isTerminated"
signature: "boolean isTerminated()"
title: "ExecutorService.isTerminated"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExecutorService.isTerminated

```java
boolean isTerminated()
```

Returns `true` if all tasks have completed following shut down.
 Note that `isTerminated` is never `true` unless
 either `shutdown` or `shutdownNow` was called first.

**返回**

- `true` if all tasks have completed following shut down
