---
id: "java-en-function-forkjoinpool-awaitquiescence"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinPool.awaitQuiescence"
signature: "public boolean awaitQuiescence(long timeout, TimeUnit unit)"
title: "ForkJoinPool.awaitQuiescence"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinPool.awaitQuiescence

```java
public boolean awaitQuiescence(long timeout, TimeUnit unit)
```

If called by a ForkJoinTask operating in this pool, equivalent
 in effect to `helpQuiesce`. Otherwise,
 waits and/or attempts to assist performing tasks until this
 pool `isQuiescent` or the indicated timeout elapses.

**参数**

- **timeout** — the maximum time to wait
- **unit** — the time unit of the timeout argument

**返回**

- `true` if quiescent; `false` if the timeout elapsed.
