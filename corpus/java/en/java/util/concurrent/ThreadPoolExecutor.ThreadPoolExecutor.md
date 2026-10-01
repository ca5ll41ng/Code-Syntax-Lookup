---
id: "java-en-function-threadpoolexecutor-threadpoolexecutor"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.ThreadPoolExecutor"
signature: "public ThreadPoolExecutor(int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit, BlockingQueue<Runnable> workQueue)"
title: "ThreadPoolExecutor.ThreadPoolExecutor"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.ThreadPoolExecutor

```java
public ThreadPoolExecutor(int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit, BlockingQueue<Runnable> workQueue)
```

Creates a new `ThreadPoolExecutor` with the given initial
 parameters, the
 `defaultThreadFactory default thread factory`
 and the `ThreadPoolExecutor.AbortPolicy
 default rejected execution handler`.

 

It may be more convenient to use one of the `Executors`
 factory methods instead of this general purpose constructor.

**参数**

- **corePoolSize** — the number of threads to keep in the pool, even if they are idle, unless `allowCoreThreadTimeOut` is set
- **maximumPoolSize** — the maximum number of threads to allow in the pool
- **keepAliveTime** — when the number of threads is greater than the core, this is the maximum time that excess idle threads will wait for new tasks before terminating.
- **unit** — the time unit for the `keepAliveTime` argument
- **workQueue** — the queue to use for holding tasks before they are executed.  This queue will hold only the `Runnable` tasks submitted by the `execute` method.

**异常**

- **IllegalArgumentException** — if one of the following holds:  `corePoolSize < 0`  `keepAliveTime < 0`  `maximumPoolSize <= 0`  `maximumPoolSize < corePoolSize`
- **NullPointerException** — if `workQueue` is null
