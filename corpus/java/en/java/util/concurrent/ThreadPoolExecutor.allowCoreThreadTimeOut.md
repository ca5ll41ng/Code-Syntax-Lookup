---
id: "java-en-function-threadpoolexecutor-allowcorethreadtimeout"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.allowCoreThreadTimeOut"
signature: "public void allowCoreThreadTimeOut(boolean value)"
title: "ThreadPoolExecutor.allowCoreThreadTimeOut"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.allowCoreThreadTimeOut

```java
public void allowCoreThreadTimeOut(boolean value)
```

Sets the policy governing whether core threads may time out and
 terminate if no tasks arrive within the keep-alive time, being
 replaced if needed when new tasks arrive. When false, core
 threads are never terminated due to lack of incoming
 tasks. When true, the same keep-alive policy applying to
 non-core threads applies also to core threads. To avoid
 continual thread replacement, the keep-alive time must be
 greater than zero when setting `true`. This method
 should in general be called before the pool is actively used.

**参数**

- **value** — `true` if should time out, else `false`

**异常**

- **IllegalArgumentException** — if value is `true` and the current keep-alive time is not greater than zero

> *Since 1.6*
