---
id: "java-en-function-abstractexecutorservice-invokeany"
language: "java"
lang: "en"
category: "function"
name: "AbstractExecutorService.invokeAny"
signature: "public <T> T invokeAny(Collection<? extends Callable<T>> tasks) throws InterruptedException, ExecutionException"
title: "AbstractExecutorService.invokeAny"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/AbstractExecutorService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractExecutorService.invokeAny

```java
public <T> T invokeAny(Collection<? extends Callable<T>> tasks) throws InterruptedException, ExecutionException
```

**异常**

- **InterruptedException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
- **IllegalArgumentException** — {@inheritDoc}
- **ExecutionException** — {@inheritDoc}
- **RejectedExecutionException** — {@inheritDoc}
