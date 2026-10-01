---
id: "java-en-function-configuration-withthreadfactory"
language: "java"
lang: "en"
category: "function"
name: "Configuration.withThreadFactory"
signature: "Configuration withThreadFactory(ThreadFactory threadFactory)"
title: "Configuration.withThreadFactory"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/StructuredTaskScope.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Configuration.withThreadFactory

```java
Configuration withThreadFactory(ThreadFactory threadFactory)
```

{@return a new `Configuration` object with the given thread factory}
 The other components are the same as this object. The thread factory is used by
 a scope to create threads when `fork(Callable) forking` subtasks.
 virtual threads`, maybe with `getName() thread names` for
 monitoring purposes, an `Thread.UncaughtExceptionHandler uncaught
 exception handler`, or other properties configured.

**参数**

- **threadFactory** — the thread factory

**参见**

- #fork(Callable)
