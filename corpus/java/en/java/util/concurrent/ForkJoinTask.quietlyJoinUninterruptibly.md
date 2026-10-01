---
id: "java-en-function-forkjointask-quietlyjoinuninterruptibly"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinTask.quietlyJoinUninterruptibly"
signature: "public final boolean quietlyJoinUninterruptibly(long timeout, TimeUnit unit)"
title: "ForkJoinTask.quietlyJoinUninterruptibly"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinTask.quietlyJoinUninterruptibly

```java
public final boolean quietlyJoinUninterruptibly(long timeout, TimeUnit unit)
```

Tries to join this task, returning true if it completed
 (possibly exceptionally) before the given timeout elapsed.

**参数**

- **timeout** — the maximum time to wait
- **unit** — the time unit of the timeout argument

**返回**

- true if this task completed

> *Since 19*
