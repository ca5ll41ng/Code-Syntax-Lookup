---
id: "java-en-function-forkjoinpool-isterminating"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.isTerminating"
signature: "public boolean isTerminating()"
title: "ForkJoinPool.isTerminating"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.isTerminating

```java
public boolean isTerminating()
```

Returns `true` if the process of termination has
 commenced but not yet completed.  This method may be useful for
 debugging. A return of `true` reported a sufficient
 period after shutdown may indicate that submitted tasks have
 ignored or suppressed interruption, or are waiting for I/O,
 causing this executor not to properly terminate. (See the
 advisory notes for class `ForkJoinTask` stating that
 tasks should not normally entail blocking operations.  But if
 they do, they must abort them on interrupt.)

**返回**

- `true` if terminating but not yet terminated
