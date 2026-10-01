---
id: "java-en-function-threadpoolexecutor-setmaximumpoolsize"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.setMaximumPoolSize"
signature: "public void setMaximumPoolSize(int maximumPoolSize)"
title: "ThreadPoolExecutor.setMaximumPoolSize"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.setMaximumPoolSize

```java
public void setMaximumPoolSize(int maximumPoolSize)
```

Sets the maximum allowed number of threads. This overrides any
 value set in the constructor. If the new value is smaller than
 the current value, excess existing threads will be
 terminated when they next become idle.

**参数**

- **maximumPoolSize** — the new maximum

**异常**

- **IllegalArgumentException** — if the new maximum is less than or equal to zero, or less than the `getCorePoolSize core pool size`

**参见**

- #getMaximumPoolSize
