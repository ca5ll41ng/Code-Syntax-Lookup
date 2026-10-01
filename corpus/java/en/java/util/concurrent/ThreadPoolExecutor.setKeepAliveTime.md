---
id: "java-en-function-threadpoolexecutor-setkeepalivetime"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.setKeepAliveTime"
signature: "public void setKeepAliveTime(long time, TimeUnit unit)"
title: "ThreadPoolExecutor.setKeepAliveTime"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.setKeepAliveTime

```java
public void setKeepAliveTime(long time, TimeUnit unit)
```

Sets the thread keep-alive time, which is the amount of time
 that threads may remain idle before being terminated.
 Threads that wait this amount of time without processing a
 task will be terminated if there are more than the core
 number of threads currently in the pool, or if this pool
 `allowsCoreThreadTimeOut() allows core thread timeout`.
 This overrides any value set in the constructor.

**参数**

- **time** — the time to wait.  A time value of zero will cause excess threads to terminate immediately after executing tasks.
- **unit** — the time unit of the `time` argument

**异常**

- **IllegalArgumentException** — if `time` less than zero or if `time` is zero and `allowsCoreThreadTimeOut`

**参见**

- #getKeepAliveTime(TimeUnit)
