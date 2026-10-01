---
id: "java-en-function-threadpoolexecutor-prestartallcorethreads"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.prestartAllCoreThreads"
signature: "public int prestartAllCoreThreads()"
title: "ThreadPoolExecutor.prestartAllCoreThreads"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.prestartAllCoreThreads

```java
public int prestartAllCoreThreads()
```

Starts all core threads, causing them to idly wait for work. This
 overrides the default policy of starting core threads only when
 new tasks are executed.

**返回**

- the number of threads started
