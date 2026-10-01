---
id: "java-en-function-futuretask-futuretask"
language: "java"
lang: "en"
category: "function"
name: "FutureTask.FutureTask"
signature: "public FutureTask(Callable<V> callable)"
title: "FutureTask.FutureTask"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/FutureTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FutureTask.FutureTask

```java
public FutureTask(Callable<V> callable)
```

Creates a `FutureTask` that will, upon running, execute the
 given `Callable`.

**参数**

- **callable** — the callable task

**异常**

- **NullPointerException** — if the callable is null
