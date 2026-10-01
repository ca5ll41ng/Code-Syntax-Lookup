---
id: "java-en-function-threadpoolexecutor-beforeexecute"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.beforeExecute"
signature: "protected void beforeExecute(Thread t, Runnable r)"
title: "ThreadPoolExecutor.beforeExecute"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.beforeExecute

```java
protected void beforeExecute(Thread t, Runnable r)
```

Method invoked prior to executing the given Runnable in the
 given thread.  This method is invoked by thread `t` that
 will execute task `r`, and may be used to re-initialize
 ThreadLocals, or to perform logging.

 

This implementation does nothing, but may be customized in
 subclasses. Note: To properly nest multiple overridings, subclasses
 should generally invoke `super.beforeExecute` at the end of
 this method.

**参数**

- **t** — the thread that will run task `r`
- **r** — the task that will be executed
