---
id: "java-en-function-executors-unconfigurablescheduledexecutorservice"
language: "java"
lang: "en"
category: "function"
name: "Executors.unconfigurableScheduledExecutorService"
signature: "public static ScheduledExecutorService unconfigurableScheduledExecutorService(ScheduledExecutorService executor)"
title: "Executors.unconfigurableScheduledExecutorService"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Executors.unconfigurableScheduledExecutorService

```java
public static ScheduledExecutorService unconfigurableScheduledExecutorService(ScheduledExecutorService executor)
```

Returns an object that delegates all defined `ScheduledExecutorService` methods to the given executor, but
 not any other methods that might otherwise be accessible using
 casts. This provides a way to safely "freeze" configuration and
 disallow tuning of a given concrete implementation.

**参数**

- **executor** — the underlying implementation

**返回**

- a `ScheduledExecutorService` instance

**异常**

- **NullPointerException** — if executor null
