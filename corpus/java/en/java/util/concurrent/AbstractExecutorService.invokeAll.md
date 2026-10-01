---
id: "java-en-function-abstractexecutorservice-invokeall"
language: "java"
lang: "en"
category: "function"
name: "AbstractExecutorService.invokeAll"
signature: "public <T> List<Future<T>> invokeAll(Collection<? extends Callable<T>> tasks) throws InterruptedException"
title: "AbstractExecutorService.invokeAll"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/AbstractExecutorService.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractExecutorService.invokeAll

```java
public <T> List<Future<T>> invokeAll(Collection<? extends Callable<T>> tasks) throws InterruptedException
```

**异常**

- **InterruptedException** — {@inheritDoc}
- **NullPointerException** — {@inheritDoc}
- **RejectedExecutionException** — {@inheritDoc}
