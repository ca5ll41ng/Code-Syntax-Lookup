---
id: "java-en-function-threadpoolexecutor-allowscorethreadtimeout"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.allowsCoreThreadTimeOut"
signature: "public boolean allowsCoreThreadTimeOut()"
title: "ThreadPoolExecutor.allowsCoreThreadTimeOut"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.allowsCoreThreadTimeOut

```java
public boolean allowsCoreThreadTimeOut()
```

Returns true if this pool allows core threads to time out and
 terminate if no tasks arrive within the keepAlive time, being
 replaced if needed when new tasks arrive. When true, the same
 keep-alive policy applying to non-core threads applies also to
 core threads. When false (the default), core threads are never
 terminated due to lack of incoming tasks.

**返回**

- `true` if core threads are allowed to time out, else `false`

> *Since 1.6*
