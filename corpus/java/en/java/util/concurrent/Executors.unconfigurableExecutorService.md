---
id: "java-en-function-executors-unconfigurableexecutorservice"
language: "java"
lang: "en"
category: "function"
name: "Executors.unconfigurableExecutorService"
signature: "public static ExecutorService unconfigurableExecutorService(ExecutorService executor)"
title: "Executors.unconfigurableExecutorService"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executors.unconfigurableExecutorService

```java
public static ExecutorService unconfigurableExecutorService(ExecutorService executor)
```

Returns an object that delegates all defined `ExecutorService` methods to the given executor, but not any
 other methods that might otherwise be accessible using
 casts. This provides a way to safely "freeze" configuration and
 disallow tuning of a given concrete implementation.

**参数**

- **executor** — the underlying implementation

**返回**

- an `ExecutorService` instance

**异常**

- **NullPointerException** — if executor null
