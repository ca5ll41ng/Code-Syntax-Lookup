---
id: "java-en-function-executors-newscheduledthreadpool"
language: "java"
lang: "en"
category: "function"
name: "Executors.newScheduledThreadPool"
signature: "public static ScheduledExecutorService newScheduledThreadPool(int corePoolSize)"
title: "Executors.newScheduledThreadPool"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executors.newScheduledThreadPool

```java
public static ScheduledExecutorService newScheduledThreadPool(int corePoolSize)
```

Creates a fixed-size thread pool that can schedule commands to run after a
 given delay, or to execute periodically.

**参数**

- **corePoolSize** — the number of threads to keep in the pool, even if they are idle

**返回**

- the newly created scheduled thread pool

**异常**

- **IllegalArgumentException** — if `corePoolSize < 0`
