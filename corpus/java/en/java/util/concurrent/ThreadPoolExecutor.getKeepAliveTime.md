---
id: "java-en-function-threadpoolexecutor-getkeepalivetime"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.getKeepAliveTime"
signature: "public long getKeepAliveTime(TimeUnit unit)"
title: "ThreadPoolExecutor.getKeepAliveTime"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.getKeepAliveTime

```java
public long getKeepAliveTime(TimeUnit unit)
```

Returns the thread keep-alive time, which is the amount of time
 that threads may remain idle before being terminated.
 Threads that wait this amount of time without processing a
 task will be terminated if there are more than the core
 number of threads currently in the pool, or if this pool
 `allowsCoreThreadTimeOut() allows core thread timeout`.

**参数**

- **unit** — the desired time unit of the result

**返回**

- the time limit

**参见**

- #setKeepAliveTime(long, TimeUnit)
