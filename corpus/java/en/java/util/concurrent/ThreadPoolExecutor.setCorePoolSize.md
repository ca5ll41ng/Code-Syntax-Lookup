---
id: "java-en-function-threadpoolexecutor-setcorepoolsize"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.setCorePoolSize"
signature: "public void setCorePoolSize(int corePoolSize)"
title: "ThreadPoolExecutor.setCorePoolSize"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.setCorePoolSize

```java
public void setCorePoolSize(int corePoolSize)
```

Sets the core number of threads.  This overrides any value set
 in the constructor.  If the new value is smaller than the
 current value, excess existing threads will be terminated when
 they next become idle.  If larger, new threads will, if needed,
 be started to execute any queued tasks.

**参数**

- **corePoolSize** — the new core size

**异常**

- **IllegalArgumentException** — if `corePoolSize < 0` or `corePoolSize` is greater than the `getMaximumPoolSize() maximum pool size`

**参见**

- #getCorePoolSize
